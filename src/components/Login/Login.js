import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="login">
            <div className="login__header">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="login__logo"/>
                </Link>
                <h1 className="login__title">Рады видеть!</h1>
            </div>
            <form className="login__form">
                <div className="login__main">
                    <div className="login__input">
                        <p>E-mail</p>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="login__input">
                        <p>Пароль</p>
                        <input type="password" name="password" required/>
                    </div>
                </div>
                <div className="login__footer">
                    <button type="submit" className="login__button">Войти</button>
                    <p className="login__text">Ещё не зарегистрированы? <Link to="/signup"
                                                                              className="login__link">Регистрация</Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login