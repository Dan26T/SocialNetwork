import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";


const Users = React.memo(props => {
    debugger
    let pagesCount = props.pagesCount;
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pages}> Pages:
            {pages.map(p => {
                return <span className={props.activePage === p && styles.active} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        <br></br>
        <br></br>
        {
            props.users.map(u => <div key={u.id}>
            <span>
            <div>
            <NavLink to={'/profile/' + u.id}><img
                src={u.photos.small != null ? u.photos.small : 'https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg'}
                className={styles.img}/></NavLink>
            </div>
            <div>
            {!u.followed ? <button disabled={props.isFollowing.some(id => id === u.id)}  onClick={() => {
                    props.follow(u.id)
                }
                }>Follow</button>
                : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                }
                }>Unfollow</button>}</div>
            </span>
                    <span>
            <span>
            <div>{u.name}</div>
            <div>{'u.status'}</div>
            </span>
            <span>
             <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
            </span>
            </span>
                </div>
            )
        }
    </div>
})

export default Users
