import s from './dialogs.module.css';
import DialogItem from './DialogItem/dialogitem';
import Message from './Message/message';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FieldControl/FieldControl";
import {maxLengthCreator, required} from "../../utilits/validation/validation";


const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let newBody = props.dialogsPage.newMessageText

    let onBodyMessageChange = (e) => {
        let text = e.target.value;
        props.updateBodyMessageText(text)
    }
    let sendMessageClick = () => {
        props.sendMessageAction()
    }

    let addMessage = (values) => {
        props.sendMessageAction(values.newMessage)
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}
                                                                         img={d.img}/>)

    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} key={m.id}/>
    })


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>

            <div>
                <div><AddReduxMessage onSubmit={addMessage}/></div>
            </div>

        </div>
    </div>
}

const maxLength50 = maxLengthCreator(50)
const AddMessage = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[required,maxLength50]} name={'newMessage'} plaseholder='Enter message'/>
        <div>
            <button>Send Message</button>
        </div>
    </form>
}
const AddReduxMessage = reduxForm({
    form: 'newMessage'
}) (AddMessage)

export default Dialogs;
