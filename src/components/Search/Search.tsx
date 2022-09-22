import React from 'react';
import s from './Search.module.scss'

const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.form}>
                <input type="text" placeholder="Find user" className={s.input}/>
            </div>
        </div>
    );
};

export default Search;
