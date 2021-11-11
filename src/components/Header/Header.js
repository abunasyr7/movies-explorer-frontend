import React from "react";
import logo from "../../images/logo.svg";
import './Header.css';
import { Link, useLocation } from "react-router-dom";

function Header ({}) {

    return (
        <header className="header">
            <a href="#" target="_blank" rel="noopener">
                <img src={logo} alt="Логотип" className="header__logo"/>
            </a>
            <div className="header__section">
                <a href="#" target="_blank" rel="noopener" className="header__register">Регистрация</a>
                <a href="#" target="_blank" rel="noopener">
                    <button className="header__login">Войти</button>
                </a>
            </div>
        </header>
    )
}

export default Header;