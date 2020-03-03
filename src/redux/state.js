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
            newPostText: 'Vovan4ik'
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
        },
        sidebar: {}
    },
    getState() {
        debugger;
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    }
};

export default store;