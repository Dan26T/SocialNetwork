import s from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/profileinfo';
import React from 'react';


const Profile = React.memo((props) => {
    return <div className={s.Profile}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>

})

export default Profile;
