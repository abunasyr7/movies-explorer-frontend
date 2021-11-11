import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation' ;
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Portfolio from '../Main/Portfolio/Portfolio';

function App() {
  return (
    <div className="page">
      <Header />
      <Navigation />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
