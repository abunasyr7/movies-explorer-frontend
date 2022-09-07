import React from 'react';
import './AboutMe.css'
import Avatar from '../../../images/IMG_3910.JPG';

function AboutMe() {
    return(
        <div className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__main">
                <div className="about-me__info">
                    <h2 className="about-me__name">Абунасыр</h2>
                    <h3>Фронтенд-разработчик, 25 лет</h3>
                    <p>Я живу в городе Алматы, закончил факультет математичекого и компьюерного моделирования в КазНУ. Я люблю слушать музыку, а ещё увлекаюсь боксом. Недавно начал кодить. 
                        С 2021 года работаю в компании "Okauto". 
                        По мере прохождения курса по веб-разработке начал работать фул-стэк разработчиком и знания, полученные во время прохождения курса, мне очень сильно помогают в работе.</p>
                    <div className="about-me__link">
                        <p>Facebook</p>
                        <p>Github</p>
                    </div>
                </div>
                <div className="about-me__photo">
                    <img src={Avatar} alt="Аватар" className="about-me__avatar" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;