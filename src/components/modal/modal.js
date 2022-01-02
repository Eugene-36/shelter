import React from 'react';
import Modal from 'react-modal';
import burger from '../icons/Burger.svg';
import styles from './modal.module.css';

import { Link } from 'react-router-dom';
//=============================================
import { useSelector, useDispatch } from 'react-redux';
import { getModalLogout } from '../redux/global/global-selector';
import {
  isModalLogoutOpen,
  isModalLogoutClose,
} from '../redux/global/global-action';
import classNames from 'classnames';
Modal.setAppElement('#root');

function ModalWin() {
  const dispatch = useDispatch();
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  const ModalLogoutClose = () => dispatch(isModalLogoutClose());
  const modalLogout = useSelector(getModalLogout);

  if (modalLogout) {
    body.style.overflow = 'hidden';
    console.log('modalLogout', modalLogout);
  } else {
    body.style.overflow = 'auto';
  }

  return (
    <div className={styles.burgerBtn}>
      <img src={burger} alt="" onClick={ModalLogoutOpen} />

      <Modal
        isOpen={modalLogout}
        onRequestClose={ModalLogoutClose}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
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
              onClick={ModalLogoutClose}
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
