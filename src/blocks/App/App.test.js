import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <header className='app__header'>
        <h1 className='app__title'>Welcome to simple log messages</h1>
    </header>;

    expect(wrapper.contains(welcome)).toEqual(true);
});
