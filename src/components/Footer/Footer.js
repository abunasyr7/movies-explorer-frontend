import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__main">
                <p>&#169; 2021</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a href="https://github.com/abunasyr7?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.facebook.com/profile.php?id=100011660975818" target="_blank"
                       rel="noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer