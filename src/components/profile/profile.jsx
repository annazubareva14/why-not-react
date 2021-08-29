import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPosts from './myPosts/myPosts';
import { addPost } from '../../redux/store';


function Profile(props) {

  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts postsData={props.profilePage.postsData}
               newPostText={props.profilePage.newPostText} 
               dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;
