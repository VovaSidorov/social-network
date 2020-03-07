// import profileReducer from "./profileReducer";
// import dialogReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
// let store = {
//     _state : {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Gutten aloha", likesCount: 12},
//                 {id: 2, message: "Privet", likesCount: 1},
//                 {id: 3, message: "Aloha", likesCount: 2},
//                 {id: 4, message: "Hello", likesCount: 0},
//                 {id: 5, message: "Hi", likesCount: 34}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Vova"},
//                 {id: 2, name: "Sveta"},
//                 {id: 3, name: "Andrey"},
//                 {id: 4, name: "Sacha"},
//                 {id: 5, name: "Valera"}
//             ],
//             messages: [
//                 {id: 1, message: "Gutten"},
//                 {id: 2, message: "Privet"},
//                 {id: 3, message: "Aloha"},
//                 {id: 4, message: "Hello"},
//                 {id: 5, message: "Hi"}
//             ],
//             newMessageBody:''
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;  // observer
//     },
//     dispatch(action){
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// };
//
//
//
//
// export default store;