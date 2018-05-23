import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class Firebase {
    database = jest.fn().mockImplementation(() => {
        return {
            ref: jest.fn().mockImplementation(() => {
                return {
                    child: jest.fn().mockImplementation(() => {
                        return {once: jest.fn()}
                    }),
                    limitToLast: jest.fn().mockImplementation(() => {
                        return {on: jest.fn()}
                    })
                };
            })
        };
    });
}

global.firebase = new Firebase();
