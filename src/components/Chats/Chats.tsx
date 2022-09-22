import React from 'react';
import s from "../Chats/Chats.module.scss";

const Chats = () => {
    return (
        <div className={s.chats}>
            <div className={s.chat}>
                <img src="" alt="" className={s.image}/>
                <div className={s.info}>
                    <span className={s.name}>
                        name
                    </span>
                    <p className={s.preview}>sup</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
