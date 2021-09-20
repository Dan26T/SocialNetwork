import s from './profileinfo.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";

const StatusForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
       <Field type={'input'} name={'status'} autoFocus={true} onBlur={props.deactivateEditMode} value={props.value}/>
   </form>
}
const StatusReduxForm = reduxForm({
    form: 'statusForm'
})(StatusForm)

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onUpdateStatus = (values) => {
        this.setState({
            status: values.status
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                </div>}
            {this.state.editMode &&
                <div>
                    <input  autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    <StatusReduxForm onSubmit={this.onUpdateStatus} />
                </div>}
        </div>
    }
}



export default ProfileStatus;
