import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNavigation.css';

function MenuNavigation({isOpen, handleToggleMenu,}) {
    return (
        <section className={`menu-navingation ${isOpen ? 'menu-navigation_type_opened' : ''}`}>
            <div className="menu-navigation__container">
                <button className="menu-navigation__close" onClick={handleToggleMenu}></button>
                <div>
                    <Link to='/' className="menu-navigation__link">Главная</Link>
                    <Link to='/movies' className="menu-navigation__link">Фильмы</Link>
                    <Link to='/saved-movies' className="menu-navigation__link">Сохранённые фильмы</Link>
                </div>
            </div>
        </section>
    )
}

export default MenuNavigation;