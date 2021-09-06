import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';


function Profile(props) {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;
