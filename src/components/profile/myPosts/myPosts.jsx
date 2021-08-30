import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post';


const MyPosts = (props) => {
  let postsElements = props.postsData.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.title}>
        My Posts
      </div>
      <div className={s.addPost}>
        <textarea onChange={onPostChange}
        ref={newPostElement} 
        className={s.input} 
        value={props.newPostText}/>
        <button onClick={ onAddPost } 
        className={s.button}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
