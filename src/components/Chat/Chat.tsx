import React from 'react';
import s from './Chat.module.scss'
import camera from '../../assets/image/img/cam.png';
import add from '../../assets/image/img/add.png';
import more from '../../assets/image/img/more.png';
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

const Chat = () => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <span className={s.user}>
                    name
                </span>
                <div className={s.icons}>
                    <img src={camera} alt="" className={s.icon}/>
                    <img src={add} alt="" className={s.icon}/>
                    <img src={more} alt="" className={s.icon}/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
