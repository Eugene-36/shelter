import React from 'react';
import Modal from 'react-modal';
import burger from '../icons/Burger.svg';
import styles from './modal.module.css';
//import s from '../navigation/navigation.module.css'
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

  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  const ModalLogoutClose = () => dispatch(isModalLogoutClose());
  const modalLogout = useSelector(getModalLogout);

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
        <div className={classNames(styles['cl-btn-2'])}>
          <div>
            <div className={classNames(styles['leftright'])}></div>
            <div className={classNames(styles['rightleft'])}></div>
            <span
              className={classNames(styles['close-btn'])}
              onClick={ModalLogoutClose}
            >
              закрыть
            </span>
          </div>
        </div>
        <div className={styles.containerHead}>
          <nav className={styles.navigation}>
            <ul className={styles.siteNav}>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none', color: '#808080' }}
                  to="/"
                  className={styles.link}
                >
                  About the shelter
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none', color: '#808080' }}
                  to="/pets"
                  className={styles.link}
                >
                  Our pets
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none', color: '#808080' }}
                  to="/help"
                  className={styles.link}
                >
                  Help the shelter
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  style={{ textDecoration: 'none', color: '#808080' }}
                  to="/contacts"
                  className={styles.link}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          {/* <div className={s.out} onClick={ModalLogoutOpen}></div> */}

          {/*! А сюда нужно будет импортировать компонент*/}

          {/* <div class="container header-mobil"> 
                <button type="button" class="menu-button" aria-expanded="false" data-menu-button>
                    <svg width="44" height="44" aria-label="Переключатель мобильного меню">
                    <use class="icon-menu" href="./img/all-icon/sprite-opt.svg#icon-menu-opt"></use>
                    <use class="icon-cross" href="./img/all-icon/sprite-opt.svg#icon-cross-opt"></use>
                    </svg>
              </button> 
         </div>  */}

          {/* <ul className="contact-info list text new-address">
          <li className="item">
            <a
              href="mailto:info@devstudio.com"
              className=" link-underline text-light position"
            >
              <svg className="phone" width="16px" height="11px">
                <use href="./img/all-icon/sprite-opt.svg#icon-envelope"></use>
              </svg>
              info@devstudio.com
            </a>
          </li>
          <li className="item">
            <a
              href="tell:+380961111111"
              className=" link-underline text-light position"
            >
              <svg className="phone" width="10px" height="15px">
                <use href="./img/all-icon/sprite-opt.svg#icon-smartphone"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li>
        </ul> */}
        </div>
        {/* <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
}

export default ModalWin;
