import React, { useEffect } from 'react';
import Modal from 'react-modal';
import burger from '../icons/Burger.svg';
import styles from './modal.module.css';
import { getAllAnimals } from '../redux/global/global-selector';
import { useSelector, useDispatch } from 'react-redux';
import { addAnimals } from '../redux/global/global-operations';
//import s from '../navigation/navigation.module.css'
import { Link } from 'react-router-dom';
import OurPetsCarts from '../ourOetsCarts/OurPetsCarts';
//=============================================

import { getModalLogout } from '../redux/global/global-selector';
import {
  isModalLogoutOpen,
  isModalLogoutClose,
} from '../redux/global/global-action';
import classNames from 'classnames';

Modal.setAppElement('#root');

function PetCartsModal() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnimals());
  }, [dispatch]);
  const result = useSelector(getAllAnimals);

  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  const ModalLogoutClose = () => dispatch(isModalLogoutClose());
  const modalLogout = useSelector(getModalLogout);

  return (
    <div className={styles.burgerBtn}>
      <img src={burger} alt="" onClick={ModalLogoutOpen} />

      {/* !============================================= */}
      <OurPetsCarts props={() => ModalLogoutOpen} />

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
        <div className={styles.containerHead}></div>
      </Modal>
    </div>
  );
}
export default PetCartsModal;
