import React from 'react';
import Navigation from '../Navigation/Navigation';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
    return(
        <main>
            <Navigation />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;