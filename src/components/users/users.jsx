import React from "react";
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpeg';
import userBackground from "../../assets/images/userBackground.jpeg"


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <div className={s.friendList}>
            {
                props.users.map(u => <div key={u.id} className={s.friendsCardWrapper}>
                    <div className={s.friendCard}>
                        <img src={ u.background != null ? u.background: userBackground } alt="profile-cover" className={s.background} />
                        <div className={s.cardInfo}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="user" className={s.photo} />
                            <div className={s.info}>
                                <div className={s.userInfo}>
                                    <h5><a href="#" className={s.profileLink}> {u.name} </a></h5>
                                    <p> {u.status} </p>
                                    <p> {"u.location.city"}, {"u.location.country"} </p>
                                </div>
                                <div className={s.btnWrapper}>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }} className={s.btnUnfollow} >unfollow</button>
                                        : <button onClick={() => { props.follow(u.id) }} className={s.btnFollow} >follow</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;