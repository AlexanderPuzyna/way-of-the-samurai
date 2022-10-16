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

    let dialogsData = [
        {id: 1, name: 'Алекс Портареску'}, 
        {id: 2, name: 'Максим Озерский'},
        {id: 3, name: 'Яна Пузына'},
        {id: 4, name: 'Армин Ван Бюрен'},
        {id: 5, name: 'Кто-то'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Its OK?'},
        {id: 4, message: 'Хэй бро, когда мой гост допишешь?'},
        {id: 5, message: 'Ок'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                
            </div>
        </div>
    )
}

export default Dialogs;