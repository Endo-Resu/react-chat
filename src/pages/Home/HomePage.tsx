import React from 'react';
import s from './HomePage.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";

const HomePage = () => {
    return (
        <div className={s.container}>
            <Sidebar />
            <Chat />
        </div>
    );
};

export default HomePage;
