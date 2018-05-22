import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const firebase = {
  database: jest.fn()
};

global.firebase = firebase;
