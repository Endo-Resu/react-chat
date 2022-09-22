import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <span className={s.logo}>
                React Chat
            </span>
            <div className={s.user}>
                <img src="" alt="" className={s.image}/>
                <span className={s.name}>
                    John
                </span>
                <button className={s.button}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
