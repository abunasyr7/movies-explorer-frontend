import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNavigation.css';
import profile from '../../images/profile.png';

function MenuNavigation({isMenuOpen, handleToggleMenu,}) {
    return (
        <section className={`menu-navigation ${isMenuOpen ? 'menu-navigation_type_opened' : ''}`}>
            <div className="menu-navigation__container">
                <button className="menu-navigation__close" onClick={handleToggleMenu}></button>
                <div className="menu-navigation__group">
                    <Link to='/' className="menu-navigation__link">Главная</Link>
                    <Link to='/movies' className="menu-navigation__link menu-navigation__link_active">Фильмы</Link>
                    <Link to='/saved-movies' className="menu-navigation__link">Сохранённые фильмы</Link>
                    <Link to='/profile' className="menu-navigation__link">
                        <img src={profile} alt="Profile" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MenuNavigation;