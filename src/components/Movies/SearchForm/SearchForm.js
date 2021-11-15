import React from 'react';
import './SearchForm.css';
import search from '../../../images/search.svg';
import search2 from '../../../images/search2.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm () {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <div className="search-form__container">
                    <img src={search} alt="Search-icon" />
                    <input className="search-form__input" type="text" minLength="2" maxLength="30" required placeholder="Фильмы" />
                    <div className="search-form__btn-section">
                        <button className="search-form__btn" type="submit">
                            <img src={search2} alt="Search-icon2" />
                        </button>
                    </div>
                    <FilterCheckbox />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;