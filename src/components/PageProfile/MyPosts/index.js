import React from 'react';
import s from './style.module.css';
import Post from '../Post';

const MyPosts = ({postData}) => {

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