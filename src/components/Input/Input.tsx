import React from 'react';
import img from '../../assets/image/img/img.png'
import s from './Input.module.scss';

const Input = () => {
    return (
        <div className={s.container}>
            <input type="text" className={s.input} placeholder='Start chatting'/>
            <div className={s.send}>
                <input type="file" className={s.file} id="file"/>
                <label htmlFor="file" className={s.label}>
                    <img src={img} alt="Attach an image" className={s.image}/>
                </label>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

export default Input;
