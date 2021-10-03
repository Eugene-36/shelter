import './App.css';
import s from '../src/components/styles/base.module.css';
//import { Switch, Router, Route } from 'react-router';
//import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
//import { Switch, Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Импорт компонентов
import Navigation from './components/navigation/navigation';
// import Hero from './components/hero/hero';
// import AboutShelter from './components/aboutTheShelter/aboutTheShelter';
// import Carts from './components/cartsAnimal/cartsAnimal';
// import Help from './components/help/help';
// import Donation from './components/donation/donation';
import Footer from './components/footer/footer';
import OurPets from './components/ourPets/ourPets.js';
import Main from './components/main/main';
//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <Router>
      {/* <div className={s.container}> */}
      {/* <div className="back"> */}
      {/* <Navigation /> */}
      {/* <Hero /> */}
      {/* </div> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/pets" component={OurPets} />
      </Switch>
      {/* <AboutShelter />
        <Carts />
        <Help />
        <Donation /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
