import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [loggedIn] = React.useState(true)

  return (
    <div className="page">
      <Switch>
        <Route exact path = "/">
          <Header loggedIn={loggedIn}/>
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header loggedIn={loggedIn}/>
          <Movies />  
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={loggedIn}/>
          <SavedMovies />
          <Footer /> 
        </Route>
        <Route path="/profile">
          <Header loggedIn={loggedIn}/>
          <Profile /> 
        </Route>
        <Route path="/signin">
          <Login /> 
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
