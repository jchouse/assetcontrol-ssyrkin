export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_MESSAGES  = 'GET_MESSAGES';

export const addMessage = ({key, data}) => {
    return {type: ADD_MESSAGE, ...data, key};
}

export const getMessages = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    };
}
