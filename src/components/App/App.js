import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile';
import Login from '../Login';
import Register from '../Register';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path = "/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />  
        </Route>
        <Route path="/saved-movies">
          <SavedMovies /> 
        </Route>
        <Route path="/profile">
          <Profile /> 
        </Route>
        <Route path="/signin">
          <Login /> 
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;