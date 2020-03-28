const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: "Vova"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Sacha"},
        {id: 5, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Gutten"},
        {id: 2, message: "Privet"},
        {id: 3, message: "Aloha"},
        {id: 4, message: "Hello"},
        {id: 5, message: "Hi"}
    ],
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});

export default dialogReducer;