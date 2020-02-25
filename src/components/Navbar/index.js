import React from "react";
import s from './style.module.css';

const Navbar = () => {
    return (
        <nav className={s.sidebar}>
            <div>
                <a href="#1">Profile</a>
            </div>
            <div>
                <a href="#2">Messages</a>
            </div>
            <div>
                <a href="#3">News</a>
            </div>
            <div>
                <a href="#4">Musik</a>
            </div>
            <div>
                <a href="#5">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;