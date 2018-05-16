import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './blocks/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logApp from './reducers';

let store = createStore(logApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
