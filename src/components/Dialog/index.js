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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vova" id='1'/>
                <DialogItem name="Sveta" id='2'/>
                <DialogItem name="Andrey" id='3'/>
                <DialogItem name="Sacha" id='4'/>
                <DialogItem name="Valera" id='5'/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="Aloha"/>
                <Message message="Privet"/>
                <Message message="Gutten"/>
            </div>
        </div>
    )

};

export default Dialog;