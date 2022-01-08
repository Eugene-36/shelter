import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import burgerMenuBtn from '../icons/Burger.svg';
import s from './ourPets.module.css';
import sModal from './ourPetsModal.module.css';
import Footer from '../footer/Footer';
import OurPetsCarts from '../ourPetsCarts/OurPetsCarts';
import styleContainer from '../../components/styles/base.module.css';

import classNames from 'classnames';

Modal.setAppElement('#root');

function OurPets() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const body = document.querySelector('body');

  console.log(body);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(Boolean(openModal));

  return (
    <div className={s.backPets}>
      <div className={styleContainer.container}>
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
                  <Link
                    style={{ textDecoration: 'none', color: '#545454' }}
                    to="/"
                    className={s.link}
                  >
                    About the shelter
                  </Link>
                </li>
                <li className={s.item}>
                  <a
                    style={{ textDecoration: 'none', color: '#545454' }}
                    className={s.link}
                  >
                    Our pets
                  </a>
                </li>
                <li className={s.item}>
                  <a
                    style={{ textDecoration: 'none', color: '#545454' }}
                    href=""
                    className={s.link}
                  >
                    Help the shelter
                  </a>
                </li>
                <li className={s.item}>
                  <a
                    style={{ textDecoration: 'none', color: '#545454' }}
                    href=""
                    className={s.link}
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>

            <img
              className={sModal.burger}
              height={22}
              src={burgerMenuBtn}
              alt=""
              onClick={openModal}
            />
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={sModal.modalContent}
            overlayClassName={sModal.modalOverlay}
            bodyOpenClassName={sModal.overHidden}
            contentLabel="Example Modal"
          >
            <div className={sModal.logoPosition}>
              <div className={sModal.under}>
                <a href="./index.html" className="logo link-underline">
                  <span className={sModal.cozyStyle}>Cozy House</span>
                </a>
                <span className={sModal.subtitle}>
                  Shelter for pets in Boston
                </span>
              </div>
            </div>
            <div className={classNames(sModal['cl-btn-2'])}>
              <div className={sModal.burgerMenu}>
                <img
                  onClick={closeModal}
                  src={burgerMenuBtn}
                  className={s.burgerMenu}
                  alt=""
                />
              </div>
            </div>
            <div className={sModal.containerHead}>
              <nav className={sModal.navigation}>
                <ul>
                  <li className={sModal.item}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/"
                      className={sModal.link}
                    >
                      About the shelter
                    </Link>
                  </li>
                  <li className={sModal.item}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/pets"
                      className={sModal.link}
                    >
                      Our pets
                    </Link>
                  </li>
                  <li className={sModal.item}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/help"
                      className={sModal.link}
                    >
                      Help the shelter
                    </Link>
                  </li>
                  <li className={sModal.item}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/contacts"
                      className={sModal.link}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Modal>
        </header>
      </div>
      <OurPetsCarts />
      <Footer />
    </div>
  );
}

export default OurPets;
