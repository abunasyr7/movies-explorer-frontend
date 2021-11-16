import React from 'react';
import { Link } from 'react-router-dom';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import './Navigation.css';
import profile from '../../images/profile.png';

function Navigation () {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <header>
            <MenuNavigation isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
            <>
                <div className="navigation">
                    <div className="navigation__box">
                        <Link to="/movies" className="navigation__link">Фильмы</Link>
                        <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
                    </div>
                    <div className="navigation__profile">
                        <Link to="/profile" className="navigation__link">
                            <img src={profile} />
                        </Link>
                    </div>
                </div>
                <button className="navigation__menu" onClick={handleToggleMenu}>
                </button>
            </>
        </header>
    )
}

export default Navigation