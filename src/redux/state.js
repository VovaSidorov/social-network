const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "Gutten aloha", likesCount: 12},
                {id: 2, message: "Privet", likesCount: 1},
                {id: 3, message: "Aloha", likesCount: 2},
                {id: 4, message: "Hello", likesCount: 0},
                {id: 5, message: "Hi", likesCount: 34}
            ],
            newPostText: 'weferfwefewfw'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = ()=>({  type: ADD_POST});
export const updateNewPostTextActionCreator = (text)=>{
    return {
        type:UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const sendMessageCreator = ()=>({  type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body)=>{
    console.log('sdfds',body);
    return {
        type:UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store;