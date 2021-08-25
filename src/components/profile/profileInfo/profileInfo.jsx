import React from 'react';
import s from './profileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <img src='https://themified.com/friend-finder/images/covers/1.jpg' className={s.img}/>
      <div className={s.profileInfo}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
