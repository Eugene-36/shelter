import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import AboutShelter from '../aboutTheShelter/aboutTheShelter';
import Carts from '../cartsAnimal/cartsAnimal';
import Help from '../help/help';
import Donation from '../donation/donation';
import Footer from '../footer/footer';
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
