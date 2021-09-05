import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import AboutShelter from '../aboutTheShelter/aboutTheShelter';
import Carts from '../cartsAnimal/cartsAnimal';
import Help from '../help/help';
import Donation from '../donation/donation';
import Footer from '../footer/footer';

import React from 'react';
function Main() {
  return (
    <>
      <div className="back">
        <Navigation />
        <Hero />
      </div>
      <AboutShelter />
      <Carts />
      <Help />
      <Donation />
      <Footer />
    </>
  );
}

export default Main;
