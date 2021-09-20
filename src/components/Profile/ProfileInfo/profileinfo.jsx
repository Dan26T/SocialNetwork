import s from './profileinfo.module.css';
import Preloader from '../../common/preloader/preloader';
import Contacts from './profileContacts';
import ProfileStatus from './profileStatus';
import React from "react";
import ProfileStatusWithHooks from "./profileStatusWithHooks";

let yesImg = 'https://findicons.com/files/icons/1008/quiet/256/yes.png'
let noImg = 'https://findicons.com/files/icons/1008/quiet/256/no.png'
let standartImg = 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.main}>
            <img src="https://www.mibreit-photo.com/galleries/europe/Cornwall/images/Priest-cove-pano.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.large !=null ? props.profile.photos.large: standartImg }/></div>
            <div>
                <div> {props.profile.fullName} </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.contacts}> Contacts: </div>
                <Contacts contacts={props.profile.contacts} />
                <div className={s.job}> Looking Job?  {!props.profile.lookingForAJob ? <img  src={noImg} />
                    : <img  src={yesImg} />}  <span>{props.profile.lookingForAJobDescription}</span></div>
            </div>
        </div>
    </div>
}


export default ProfileInfo;
