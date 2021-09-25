import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import AboutShelter from '../aboutTheShelter/aboutTheShelter';
import Carts from '../cartsAnimal/cartsAnimal';
import Help from '../help/help';
import Donation from '../donation/donation';
import Footer from '../footer/footer';
import { v4 as uuidv4 } from 'uuid';


//===============================

// import PropTypes from 'prop-types';

function Main() {
  return (
    <>
      <div className="back">
        <Navigation />
        <Hero />
      </div>
      <AboutShelter />
      <Carts pro={uuidv4()} />
      <Help />
      <Donation />
      <Footer />
    </>
  );
}

export default Main;
