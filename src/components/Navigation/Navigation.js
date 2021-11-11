import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <section className="navigation">
            <h1 className="navigation__text">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="navigation__buttons">
                <button className="navigation__about">О проекте</button>
                <button className="navigation__tech">Технологии</button>
                <button className="navigation__student">Студент</button>
            </div>
        </section>
    )
}

export default Navigation;