import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <section>   
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;