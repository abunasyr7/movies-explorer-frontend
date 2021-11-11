import React from 'react';
import './Techs.css';
import InfoButton from '../../InfoButton';

function Techs() {
    return (
        <section className="techs">
            <div className="techs__main">
                <h3>Технологии</h3>
                <h2>7 технологий</h2>
                <p>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__buttons">
                <InfoButton name="HTML"/>
                <InfoButton name="CSS"/>
                <InfoButton name="JS"/>
                <InfoButton name="React"/>
                <InfoButton name="Git"/>
                <InfoButton name="Express.js"/>
                <InfoButton name="mongoDB"/>
            </div>
        </section>
    )
}

export default Techs;