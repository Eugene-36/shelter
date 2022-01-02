import React from 'react';
import s from './navigation.module.css';

import { Link } from 'react-router-dom';

import ModalNew from '../modal/Modal';

function Navigation() {
  return (
    <header className="#">
      <div className={s.containerHead}>
        <nav className={s.navigation}>
          <div className={s.logoPosition}>
            <div className={s.under}>
              <a href="./index.html" className="logo link-underline">
                <span className={s.cozyStyle}>Cozy House</span>
              </a>
              <span className={s.subtitle}>Shelter for pets in Boston</span>
            </div>
          </div>
          <ul className={s.siteNav}>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/"
                className={s.link}
              >
                About the shelter
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/pets"
                className={s.link}
              >
                Our pets
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/help"
                className={s.link}
              >
                Help the shelter
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/contacts"
                className={s.link}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <ModalNew />
      </div>
    </header>
  );
}

export default Navigation;
