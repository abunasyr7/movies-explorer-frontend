import React from 'react';
import './PageNav.css';

function PageNav() {
    return (
        <section className="page-nav">
            <h1 className="page-nav__text">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="page-nav__buttons">
                <button className="page-nav__about" type="button">О проекте</button>
                <button className="page-nav__tech" type="button">Технологии</button>
                <button className="page-nav__student" type="button">Студент</button>
            </div>
        </section>
    )
}

export default PageNav;