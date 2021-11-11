import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__main">
                <p>&#169; 2021</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noopener">Яндекс.Практикум</a>
                    <a href="https://github.com/abunasyr7?tab=repositories" target="_blank" rel="noopener">Github</a>
                    <a>Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer