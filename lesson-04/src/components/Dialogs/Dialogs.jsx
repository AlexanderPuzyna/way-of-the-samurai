import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " +s.active}>
                    Алекс Портареску
                </div>
                <div className={s.dialog}>
                    Максим Озерский
                </div>
                <div className={s.dialog}>
                    Яна Пузына
                </div>
                <div className={s.dialog}>
                    Армин Ван Бюрен
                </div>
                <div className={s.dialog}>
                    Кто-то
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