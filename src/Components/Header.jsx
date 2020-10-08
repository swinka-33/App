import React from 'react';
import HeaderStyle from './Header.module.css';

export const Header = (props) => {
    return (<div id="app">
        <div className={HeaderStyle.app__header}>
            <div className={HeaderStyle.app__header__logo}>
                <img alt="" src={props.logo} className={HeaderStyle.app__header__logo__img}/>
            </div>
            <div className={HeaderStyle.app__header__home}>
                Home
            </div>
            <div className={HeaderStyle.app__header__todo}>
                ToDo
            </div>
            <div className={HeaderStyle.app__header__settings}>
                Settings
            </div>
            <div className={HeaderStyle.app__header__about}>
                About
            </div>
        </div>
    </div>);
};