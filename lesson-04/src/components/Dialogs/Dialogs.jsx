import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " +s.active}>
                    <NavLink to='/dialogs/1'>Алекс Портареску</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2'>Максим Озерский</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3'>Яна Пузына</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4'>Армин Ван Бюрен</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/5'>Кто-то</NavLink>
                </div>

            </div>
            <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How are you?</div>
               <div className={s.message}>It's OK?</div>
               <div className={s.message}>Хэй бро, когда мой гост допишешь?</div>
               <div className={s.message}>Ок</div>
            </div>
        </div>
    )
}

export default Dialogs;