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

    let dialogs = [
        {id: 1, name: 'Алекс Портареску'}, 
        {id: 2, name: 'Максим Озерский'},
        {id: 3, name: 'Яна Пузына'},
        {id: 4, name: 'Армин Ван Бюрен'},
        {id: 5, name: 'Кто-то'}
    ];

    let messages = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Its OK?'},
        {id: 4, message: 'Хэй бро, когда мой гост допишешь?'},
        {id: 5, message: 'Ок'}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )

    

    let messagesElements = messages.map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
                 
            </div>
            <div className={s.messages}>
                {messagesElements}
                
            </div>
        </div>
    )
}

export default Dialogs;