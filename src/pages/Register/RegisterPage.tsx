import React from 'react';
import image from '../../assets/image/img/addAvatar.png'
import s from './RegisterPage.module.scss';

const RegisterPage = () => {
    return (
        <div className={s.wrapper}>
                <span className={s.logo}>
                    React Chat
                </span>
            <h1 className={s.title}>
                Registration
            </h1>
            <form className={s.form}>
                <input className={s.input} type="text" placeholder="display name"/>
                <input className={s.input} type="email" placeholder="email"/>
                <input className={s.input} type="password" placeholder="password"/>
                <input className={s.file} type="file" id="file"/>
                <label className={s.label} htmlFor="file">
                    <img src={image} alt="Add an avatar"/>
                    <span>Add an avatar</span>
                </label>
                <button className={s.button}>
                    Sign Up
                </button>
            </form>
            <p className={s.text}>You do have an account? Login</p>
        </div>
    );
};

export default RegisterPage;
