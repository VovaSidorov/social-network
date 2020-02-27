import React from 'react';
import s from './style.module.css';
import Post from '../Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Gutten", likesCount: 12},
        {id: 2, message: "Privet", likesCount: 1},
        {id: 3, message: "Aloha", likesCount: 2},
        {id: 4, message: "Hello", likesCount: 0},
        {id: 5, message: "Hi", likesCount: 34}
    ];

    let postElement = postData.map(post=><Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

export default MyPosts;