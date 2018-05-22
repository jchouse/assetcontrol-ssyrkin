import React, { Component } from 'react';
import './App.css';
import Messaging from '../Messaging/Messaging';

import jsdom from 'jsdom';

/**
 * Main app component
 */
export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <header className='app__header'>
                    <h1 className='app__title'>Welcome to simple log messages</h1>
                </header>
                <Messaging />
            </div>
        );
    }
}
