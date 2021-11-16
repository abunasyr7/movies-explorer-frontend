import React from 'react';
import { Link } from 'react-router-dom';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import './Navigation.css';

function Navigation () {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <header>
            <MenuNavigation isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
            <>
                <div className="header__group navigation__group-style">
                    <div className="header__box-link">
                        <Link to="/movies" className="header__nav-link">Фильмы</Link>
                        <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__nav-link"></Link>
                    <button className="header__menu" onClick={handleToggleMenu}></button>
                </div>
            </>
        </header>
    )
}

export default Navigation