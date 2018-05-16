export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_MESSAGES  = 'GET_MESSAGES';

// Add new message to redux store
export const addMessage = ({key, data}) => {
    return {type: ADD_MESSAGE, ...data, key};
}

// Put all messages to redux store
export const getMessages = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    };
}
