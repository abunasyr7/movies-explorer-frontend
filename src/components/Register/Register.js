import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {
    return(
        <section className="register">
            <div className="register__header">
                <a href="/">
                    <img src={logo} alt="Логотип" className="register__logo"/>
                </a>
                <h1 className="register__title">Добро пожаловать!</h1>
            </div>
            <form className="register__form">
                <div className="register__main">
                    <div className="register__input">
                        <p>Имя</p>
                        <input type="text" name="name" required />
                    </div>
                    <div className="register__input">
                        <p>E-mail</p>
                        <input type="email" name="email" required />
                    </div>
                    <div className="register__input">
                        <p>Пароль</p>
                        <input type="password" name="password" required />
                    </div>
                </div>
                <button className="register__button">Зарегестрироваться</button>
                <p className="register__text">Уже зарегестрированы? <Link to='/signin' className="register__link">Войти</Link></p>
            </form>
        </section>
    )
}

export default Register;