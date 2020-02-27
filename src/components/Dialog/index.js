import React from 'react';
import s from './style.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialog = () => {
    let dialogsData = [
        {id: 1, name: "Vova"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Sacha"},
        {id: 5, name: "Valera"}
    ];

    let massegesData = [
        {id: 1, message: "Gutten"},
        {id: 2, message: "Privet"},
        {id: 3, message: "Aloha"},
        {id: 4, message: "Hello"},
        {id: 5, message: "Hi"}
    ];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = massegesData
        .map(message => <Message message={message.message}/>);

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