import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../icons/Burger.svg';
import s from './ourPets.module.css';
import Footer from '../footer/footer';
function OurPets() {
  return (
    <div className={s.backPets}>
      <header className="page-header">
        <div className={s.containerHead}>
          <nav className={s.navigation}>
            <div className="logo-position">
              <div className={s.under}>
                <a href="./index.html" className="logo link-underline">
                  <span className={s.cozyStyle}>Cozy House</span>
                </a>
                <span className={s.subtitle}>Shelter for pets in Boston</span>
              </div>
            </div>
            <ul className={s.siteNav}>
              <li className={s.item}>
                <Link to="/" className={s.link}>
                  About the shelter
                </Link>
              </li>
              <li className={s.item}>
                <a href="" className={s.link}>
                  Our pets
                </a>
              </li>
              <li className={s.item}>
                <a href="" className={s.link}>
                  Help the shelter
                </a>
              </li>
              <li className={s.item}>
                <a href="" className={s.link}>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <img className={s.burger} height={22} src={burger} alt="" />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default OurPets;
