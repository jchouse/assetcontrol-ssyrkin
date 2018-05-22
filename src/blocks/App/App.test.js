import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Messaging from '../Messaging/Messaging';

it('renders App with Messaging component', () => {
    const wrapper = shallow(<App />);
    const welcome = <header className='app__header'>
        <h1 className='app__title'>Welcome to simple log messages</h1>
    </header>;

    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.contains(<Messaging/>)).toEqual(true);
});
