import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul>
                <li className="portfolio__sites">
                    <a href="https://github.com/abunasyr7/how-to-learn" target="_blank" rel="noreferrer">Статичный
                        сайт</a>
                    <a href="https://github.com/abunasyr7/how-to-learn" target="_blank" rel="noreferrer">↗</a>
                </li>
                <li className="portfolio__sites">
                    <a href="https://abunasyr7.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный
                        сайт</a>
                    <a href="https://abunasyr7.github.io/russian-travel/" target="_blank" rel="noreferrer">↗</a>
                </li>
                <li className="portfolio__sites">
                    <a href="https://mesto.abunasyr7.nomoredomains.club" target="_blank" rel="noreferrer">Одностраничное
                        приложение</a>
                    <a href="https://mesto.abunasyr7.nomoredomains.club" target="_blank" rel="noreferrer">↗</a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;