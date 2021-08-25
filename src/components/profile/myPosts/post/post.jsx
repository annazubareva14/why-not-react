import React from 'react';
import s from './post.module.css';

function Post(props) {
  return (
      <div className={s.item}>
        <img src='https://themified.com/friend-finder/images/users/user-1.jpg' />
        {props.message}
        <div>
          <span>like</span> {props.likesCount}
        </div>
    </div>
  );
}

export default Post;
