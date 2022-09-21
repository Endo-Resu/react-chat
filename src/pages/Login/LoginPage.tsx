import React from 'react';
import s from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <span className={s.logo}>
                    React Chat
                </span>
                <h1 className={s.title}>
                    Login
                </h1>
                <form className={s.form}>
                    <input className={s.input} type="email" placeholder="email"/>
                    <input className={s.input} type="password" placeholder="password"/>
                    <button className={s.button}>
                        Sign in
                    </button>
                </form>
                <p className={s.text}>You don't have an account? Register</p>
            </div>
        </div>
    );
};

export default LoginPage;
