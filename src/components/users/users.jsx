import React from "react";
import s from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, 
                photoUrl: 'https://themified.com/friend-finder/images/users/user-8.jpg',
                backgroundUrl: 'https://themified.com/friend-finder/images/covers/6.jpg',
                followed: true,
                fullName: 'Richard Bell',
                status: 'Student at Harvard',
                location: { country: 'Russia', city: 'Moscow' }
            },
            {
                id: 2, 
                photoUrl: 'https://themified.com/friend-finder/images/users/user-4.jpg',
                backgroundUrl: 'https://themified.com/friend-finder/images/covers/3.jpg',
                followed: true,
                fullName: 'John Doe',
                status: 'Traveler',
                location: { country: 'Ukraine', city: 'Kiev' }
            },
            {
                id: 3,
                photoUrl: 'https://themified.com/friend-finder/images/users/user-10.jpg',
                backgroundUrl: 'https://themified.com/friend-finder/images/covers/4.jpg',
                followed: true,
                fullName: 'Julia Cox',
                status: 'Photographer at Photography',
                location: { country: 'Russia', city: 'Moscow' }
            },
            {
                id: 4,
                photoUrl: 'https://themified.com/friend-finder/images/users/user-7.jpg',
                backgroundUrl: 'https://themified.com/friend-finder/images/covers/5.jpg',
                followed: true,
                fullName: 'Robert Cook',
                status: 'Software Engineer',
                location: { country: 'Russia', city: 'Moscow' }
            }
        ])
    }

    return (
        <div className={s.friendList}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.friendsCardWrapper}>
                        <div className={s.friendCard}>
                            <img src={u.backgroundUrl} alt="profile-cover" className={s.background} />
                            <div className={s.cardInfo}>
                                <img src={u.photoUrl} alt="user" className={s.photo} />
                                <div className={s.info}>
                                    <div className={s.userInfo}>
                                        <h5><a href="#" className={s.profileLink}> {u.fullName} </a></h5>
                                        <p> {u.status} </p>
                                        <p> {u.location.city}, {u.location.country} </p>
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
                    </div>

                </div>)
            }
        </div>
    )
};

export default Users;