import React from 'react';
import s from './style.module.css';

const Post = ({message}) => {
  return (
    <div className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
      {message}
          <div>
            <span>like</span>
          </div>
    </div>
  )

}

export default Post;