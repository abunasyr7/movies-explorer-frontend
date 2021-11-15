import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({url, title, duration}) {

    const { pathname } = useLocation();

    return(
        <section className="movies-card">
            <div className="movies-card__container">
                <img className="movies-card__img" src={url} alt={title} />
                <div className="movies-card__group">
                    <h2 className="movies-card__title">{title}</h2>
                    <div className="movies-card__duration-cnt">
                        <p className="movies-card__duration">{duration}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviesCard;