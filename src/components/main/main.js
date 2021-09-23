import { useSelector, useDispatch } from 'react-redux';
import { addAnimals } from '../redux/global/global-operations';
import { getAllAnimals } from '../redux/global/global-selector';

import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import AboutShelter from '../aboutTheShelter/aboutTheShelter';
import Carts from '../cartsAnimal/cartsAnimal';
import Help from '../help/help';
import Donation from '../donation/donation';
import Footer from '../footer/footer';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
console.log();

//===============================

// import PropTypes from 'prop-types';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnimals());
  }, [dispatch]);
  const result = useSelector(getAllAnimals);

  const m = result.map(el => el.img);
  console.log('mmmmmmmmmmmmm', m);

  return (
    <>
      <div>
        <h1>111111111111111111111</h1>
        <img src={`${'http://localhost:3000/'}` + m[6]} alt="" />
      </div>
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
