import React from 'react';
import './hero.css';
import mainDog from '../icons/start-screen-puppy.png';
import desktop from '../icons/main-big-puppy.png';
import tablet from '../icons/main-tablet.png';
import { useMediaQuery } from 'react-responsive';


function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className="section-hero">
      <section>
        <div className="flexContainer">
          <div className="newContainer">
            <h1 className="hero-text">
              Not only people
              <br />
              need a house
            </h1>
            <div className="container-text">
              <p className="text">
                We offer to give a chance to a little and nice puppy with an
                extremely wide and open heart. He or she will love you more than
                anybody else in the world, you will see!
              </p>
            </div>
            <button className="button">
              <span className="button-text">Make a friend</span>
            </button>
          </div>
          {isDesktopOrLaptop && (
            <img className="main-dog" src={desktop} alt="" />
          )}

          {isTabletOrMobile && <img className="main-dog" src={tablet} alt="" />}
        </div>
      </section>
    </div>
  );
}

export default Hero;

//height={22}
