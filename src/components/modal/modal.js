import React from 'react';
import Modal from 'react-modal';
import burger from '../icons/Burger.svg';
import styles from './modal.module.css';

import { Link } from 'react-router-dom';

import classNames from 'classnames';
Modal.setAppElement('#root');

function ModalWin() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.burgerBtn}>
      <img src={burger} alt="" onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        bodyOpenClassName={styles.overHidden}
        contentLabel="Example Modal"
      >
        <div className={styles.logoPosition}>
          <div className={styles.under}>
            <a href="./index.html" className="logo link-underline">
              <span className={styles.cozyStyle}>Cozy House</span>
            </a>
            <span className={styles.subtitle}>Shelter for pets in Boston</span>
          </div>
        </div>
        <div className={classNames(styles['cl-btn-2'])}>
          <div>
            <img
              onClick={closeModal}
              src={burger}
              className={styles.burgerMenu}
              alt=""
            />
          </div>
        </div>
        <div className={styles.containerHead}>
          <nav className={styles.navigation}>
            <ul className={styles.siteNav}>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/"
                  className={styles.link}
                >
                  About the shelter
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/pets"
                  className={styles.link}
                >
                  Our pets
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/help"
                  className={styles.link}
                >
                  Help the shelter
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/contacts"
                  className={styles.link}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWin;
