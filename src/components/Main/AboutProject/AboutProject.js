import React from 'react';
import './AboutProject.css'

function AboutProject() {
    return (
        <div className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__main">
                <div className="about-project__info">
                    <h3>Дипломный проект включал 5 этапов</h3>
                    <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__info">
                    <h3>На выполнение диплома ушло 5 недель</h3>
                    <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__diagram">
                <div className="about-project__line_type_green">
                    <p>1 неделя</p>
                </div>
                <div className="about-project__line_type_black">
                    <p>4 недели</p>
                </div>
            </div>
            <div className="about-project__add-block">
                <p>Back-end</p>
                <p>Front-end</p>
            </div>
        </div>
    )
}

export default AboutProject