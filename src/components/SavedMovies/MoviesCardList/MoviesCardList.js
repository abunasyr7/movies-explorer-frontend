import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../../images/image1.png';
import image2 from '../../../images/image2.png';
import image3 from '../../../images/image3.png';

function MoviesCardList() {
    return (
        <section className="movies-card-list">
            <MoviesCard
                url={image1}
                title="33 слова о дизайне"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image2}
                title="Киноальманах «100 лет дизайна»"
                duration = "1ч 17м"
            />
                <MoviesCard
                url={image3}
                title="В погоне за Бенкси"
                duration = "1ч 17м"
            />
        </section>
    )
}

export default MoviesCardList;