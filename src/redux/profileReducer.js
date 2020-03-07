const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';


let initialState =   {
    posts: [
        {id: 1, message: "Gutten aloha", likesCount: 12},
        {id: 2, message: "Privet", likesCount: 1},
        {id: 3, message: "Aloha", likesCount: 2},
        {id: 4, message: "Hello", likesCount: 0},
        {id: 5, message: "Hi", likesCount: 34}
    ],
        newPostText: ''
}

const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = ()=>({  type: ADD_POST});
export const updateNewPostTextActionCreator = (text)=>{
    return {
        type:UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;