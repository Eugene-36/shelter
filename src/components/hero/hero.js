import React from 'react';
import './hero.css';
import mainDog from '../icons/start-screen-puppy.png'
function Hero() {
  return (
    <div className="section-hero">
      <section>
        <div>
          <h1 className="hero-text">
            Not only people
            <br /> need a house
          </h1>
          <p className="text">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <button className="button">
            <span className="button-text">Make a friend</span>
          </button>
          <img className="main-dog"  src={mainDog} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;

//height={22}