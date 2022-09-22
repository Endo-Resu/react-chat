import React from 'react';
import s from './Message.module.scss';

const Message = () => {
    return (
        <div className={s.message}>
            <div className={s.info}>
                <img src="" alt="" className={s.avatar}/>
                <span className={s.date}>
                    date
                </span>
            </div>
            <div className={s.content}>
                <p className={s.text}>
                    sup
                </p>
                <img src="" alt="" className={s.image}/>
            </div>
        </div>
    );
};

export default Message;
