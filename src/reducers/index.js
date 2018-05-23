import { combineReducers } from 'redux';
import { GET_MESSAGES, ADD_MESSAGE } from '../actions';

// Work with redux store key "messages"
const messages = (state = {}, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                ...action.messages
            };
        case ADD_MESSAGE:
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
