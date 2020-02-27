import React from "react";
import s from './style.module.css';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="#3">News</a>
            </div>
            <div className={s.item}>
                <a href="#4">Musik</a>
            </div>
            <div className={s.item}>
                <a href="#5">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;