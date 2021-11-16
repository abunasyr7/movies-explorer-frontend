import React from "react";

import { NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation"
import logo from "../../images/logo.svg";
import './Header.css';

function Header (props) {

    const { pathname } = useLocation();
    const isColorHead = pathname === '/' ? 'header' : 'header header-style'

    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="Логотип" className="header__logo"/>
            </a>
            {props.loggedIn && (pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') ? (
                <Navigation />
            ) : (
                <>
                    <div className="header__section">
                        <NavLink to="/signup" className="header__register">Регистрация</NavLink>
                        <NavLink to="/signin">
                            <button className="header__login">Войти</button>
                        </NavLink>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;