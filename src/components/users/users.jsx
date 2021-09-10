import React from "react";
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpeg';
import userBackground from "../../assets/images/userBackground.jpeg"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.pageWrapper}>
        <div className={s.pagibation}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}> {p} </span>
            })}
        </div>
        <div className={s.friendList}>
            {
                props.users.map(u => <div key={u.id} className={s.friendsCardWrapper}>
                    <div className={s.friendCard}>
                        <img src={u.background != null ? u.background : userBackground} alt="profile-cover" className={s.background} />
                        <div className={s.cardInfo}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user" className={s.photo} />
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

    </div>
}

export default Users;