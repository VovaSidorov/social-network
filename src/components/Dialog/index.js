import React from 'react';
import s from './style.module.css';

const Dialog = () => {
    return (

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' '+ s.active}>
                        Vova
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Andrey
                    </div>
                    <div className={s.dialog}>
                        Dima
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How is your health?</div>
                    <div className={s.message}>yo</div>
                    <div className={s.message}>Lorem Ipsum</div>
                </div>
            </div>




    )

};

export default Dialog;