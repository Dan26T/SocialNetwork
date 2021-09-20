import s from './profileinfo.module.css';
import React, {useState, useEffect} from "react";
import {Field, reduxForm} from "redux-form";

const StatusForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field type={'input'} name={'status'} autoFocus={true} onBlur={props.deactivateEditMode} value={props.value}/>
    </form>
}
const StatusReduxForm = reduxForm({
    form: 'statusForm'
})(StatusForm)

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>}
        {editMode &&
        <div>
            <input  onChange={onChangeStatus} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
        </div>}
    </div>
}


export default ProfileStatusWithHooks;
