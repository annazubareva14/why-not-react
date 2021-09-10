import React from "react";
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpeg';
import userBackground from "../../assets/images/userBackground.jpeg"


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div className={s.pageWrapper}>
            <div className={s.pagibation}>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={(e) => {this.onPageChanged(p);}}> {p} </span>
                }) }
            </div>
            <div className={s.friendList}>
                {
                    this.props.users.map(u => <div key={u.id} className={s.friendsCardWrapper}>
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
                                            ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.btnUnfollow} >unfollow</button>
                                            : <button onClick={() => { this.props.follow(u.id) }} className={s.btnFollow} >follow</button>
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
}

export default Users;