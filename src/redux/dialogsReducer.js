const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';
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
    newMessageBody:''
}

const dialogReducer = (state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

};

export const sendMessageCreator = ()=>({  type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body)=>{
    console.log('sdfds',body);
    return {
        type:UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogReducer;