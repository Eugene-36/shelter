import Navigation from '../navigation/Navigation';
import Hero from '../hero/Hero';
import AboutShelter from '../aboutTheShelter/AboutTheShelter';
import Carts from '../cartsAnimal/CartsAnimal';
import Help from '../help/Help';
import Donation from '../donation/Donation';
import Footer from '../footer/Footer';
import s from '../../components/styles/base.module.css';
import { v4 as uuidv4 } from 'uuid';

//===============================

// import PropTypes from 'prop-types';

function Main() {
  return (
    <>
      <div className="back">
        <div className={s.container}>
          <Navigation />
          <Hero />
        </div>
      </div>
      <div className={s.container}>
        <AboutShelter />
      </div>
      <Carts pro={uuidv4()} />
      <Help />
      <Donation />
      <Footer />
    </>
  );
}

export default Main;
