import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id;
    return <div className={s.dialog + " " +s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Алекс Портареску" id="1"/>
                <DialogItem name="Максим Озерский" id="2"/>
                <DialogItem name="Яна Пузына" id="3"/>
                <DialogItem name="Армин Ван Бюрен" id="4"/>
                <DialogItem name="Кто-то" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="It's OK?"/>
                <Message message="Хэй бро, когда мой гост допишешь?"/>
                <Message message="Ок"/>
            </div>
        </div>
    )
}

export default Dialogs;