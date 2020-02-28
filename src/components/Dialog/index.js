import React from 'react';
import s from './style.module.css';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";


const Dialog = ({dialogsData,massegesData}) => {


    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = massegesData
        .map(message => <MessageItem message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )

};

export default Dialog;