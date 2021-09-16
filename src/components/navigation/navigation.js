import React from 'react';
import s from './navigation.module.css';
import burger from '../icons/Burger.svg';
import { Link } from 'react-router-dom';
//import UserMenu from '../modal/modal';
import ModalWin from '../modal/modal';
// Импорты чтобы попробовать открыть модалку
import { useSelector, useDispatch } from 'react-redux';
import { isModalLogoutOpen } from '../redux/global/global-action';
import moduleName from '../modal/modal';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Navigation() {
  const dispatch = useDispatch();
  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());

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
                style={{ textDecoration: 'none', color: '#cdcdcd' }}
                to="/"
                className={s.link}
              >
                About the shelter
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none', color: '#cdcdcd' }}
                to="/pets"
                className={s.link}
              >
                Our pets
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none', color: '#cdcdcd' }}
                to="/help"
                className={s.link}
              >
                Help the shelter
              </Link>
            </li>
            <li className={s.item}>
              <Link
                style={{ textDecoration: 'none', color: '#cdcdcd' }}
                to="/contacts"
                className={s.link}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.out} onClick={ModalLogoutOpen}>
          <ModalWin />
          {/* <UserMenu /> */}
        </div>

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
    </header>
  );
}

export default Navigation;

//   <header class="page-header">
//   <div class="container-head nav-info">
// <nav class="navigation">
//   <a href="./index.html" class="logo link-underline">Web <span class="color-logo">Studio</span></a>

//   <ul class="site-nav list">
//       <li class="item"><a href="./index.html" class="link link-underline">Студия</a></li>
//       <li class="item"><a href="./portfolio.html" class="link current link-underline">Портфолио</a></li>
//       <li class="item"><a href="" class="link link-underline">Контакты</a></li>
//   </ul>
// </nav>
// <ul class="contact-info list text new-address">
//   <li class="item">
//       <a href="mailto:info@devstudio.com" class=" link-underline text-light position">
//           <svg class="phone" width="16px" height="11px">
//               <use href="./img/all-icon/sprite-opt.svg#icon-envelope"></use>
//           </svg>
//       info@devstudio.com</a>
//   </li>
//   <li class="item">
//       <a href="tell:+380961111111" class=" link-underline text-light position">
//       <svg class="phone" width="10px" height="15px">
//           <use  href="./img/all-icon/sprite-opt.svg#icon-smartphone"></use>
//       </svg>
//       +38 096 111 11 11</a>
//   </li>
// </ul>
// </div>
// </header>

{
  /* <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
</nav>; */
}
