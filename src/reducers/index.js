import { combineReducers } from 'redux';

const messages = (state = {}, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                ...action.messages
            };
        case 'ADD_MESSAGE':
            return {
                ...state,
                [action.key]: {
                    date: action.date,
                    text: action.text,
                    id: action.id
                }
            };
        default:
            return state;
    }
}

const logApp = combineReducers({
    messages
});

export default logApp;
