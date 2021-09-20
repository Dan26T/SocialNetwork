import s from './friends.module.css';
import Friend from './FriendItem/friends';
import React from 'react';

const Friends = (props) => {
    debugger
    let friensTitle = props.friends.map((friend) => {
        return <Friend id={friend.id} key={friend.id} name={friend.name} img={friend.img}/>
    })

    return <div>
        <div>
            {friensTitle}
        </div>
    </div>

}

export default Friends;
