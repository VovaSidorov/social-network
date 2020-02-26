
import React from 'react';
import s from './style.module.css';
import Post from '../Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?'/>
        <Post message='Its my first post'/>

      </div>
    </div>
  )

}

export default MyPosts;