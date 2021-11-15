import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../../images/image1.png';
import image2 from '../../../images/image2.png';
import image3 from '../../../images/image3.png';
import image4 from '../../../images/image4.png';
import image5 from '../../../images/image5.png';
import image6 from '../../../images/image6.png';
import image7 from '../../../images/image7.png';
import image8 from '../../../images/image8.png';
import image9 from '../../../images/image9.png';
import image10 from '../../../images/image10.png';
import image11 from '../../../images/image11.png';
import image12 from '../../../images/image12.png';

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
            <MoviesCard
                url={image4}
                title="Баския: Взрыв реальности"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image5}
                title="Бег это свобода"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image6}
                title="Книготорговцы"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image7}
                title="Когда я думаю о Германии ночью"
                duration = "1ч 17м"
            />

            <MoviesCard
                url={image8}
                title="Gimme Danger: История Игги и The Stooges"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image9}
                title="Дженис: Маленькая девочка грустит"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image10}
                title="Соберись перед прыжком"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image11}
                title="Пи Джей Харви: A dog called money"
                duration = "1ч 17м"
            />
            <MoviesCard
                url={image12}
                title="По волнам: Искусство звука в кино"
                duration = "1ч 17м"
            />
        </section>
    )
}

export default MoviesCardList;