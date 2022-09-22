import React from 'react';
import s from './Messages.module.scss';
import Message from "../Message/Message";

const Messages = () => {
    return (
        <div className={s.container}>
            <Message />
        </div>
    );
};

export default Messages;
