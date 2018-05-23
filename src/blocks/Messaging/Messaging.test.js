import React from 'react';
import { shallow } from 'enzyme';
import {Messaging} from './Messaging';
import MessagingControls from './Controls/Controls';
import MessagingList from './List/List';

describe('<Messaging />', () => {
    it('renders Messaging', () => {
        const wrapper = shallow(<Messaging database={firebase.database()}/>);

        expect(wrapper.contains(<MessagingControls />)).toEqual(true);
        expect(wrapper.contains(<MessagingList />)).toEqual(true);
    });
});

