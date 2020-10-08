import React from 'react';
import HeaderStyle from './Header.module.css';
import { NavLink } from "react-router-dom";

export const Header = (props) => {
    return (<div id="app">
        <div className={HeaderStyle.app__header}>
            <div className={HeaderStyle.app__header__logo}>
                <img alt="" src={props.logo} className={HeaderStyle.app__header__logo__img}/>
            </div>
            <div className={HeaderStyle.app__header__home}>
                <NavLink to='/Home' activeClassName={HeaderStyle.color}>Home</NavLink>
            </div>
            <div className={HeaderStyle.app__header__todo}>
                <NavLink to='/ToDo' activeClassName={HeaderStyle.color}>ToDo</NavLink>
            </div>
            <div className={HeaderStyle.app__header__settings}>
                <NavLink to='/Settings' activeClassName={HeaderStyle.color}>Settings</NavLink>
            </div>
            <div className={HeaderStyle.app__header__about}>
                <NavLink to='/About' activeClassName={HeaderStyle.color}>About</NavLink>
            </div>
        </div>
    </div>);
};