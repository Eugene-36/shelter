import React from 'react';
import './navigation.css';
import burger from '../icons/Burger.svg';

function Navigation() {
  return (
    <header className="page-header">
      <div className="container-head nav-info">
        <nav className="navigation">
          <div className="logo-position">
            <div className="under">
              <a href="./index.html" className="logo link-underline">
                <span className="cozy-style">Cozy House</span>
              </a>
              <span className="subtitle">Shelter for pets in Boston</span>
            </div>
          </div>
          <ul className={'site-nav list'}>
            <li className="item">
              <a href="./index.html" className="link link-underline">
                About the shelter
              </a>
            </li>
            <li className="item">
              <a
                href="./portfolio.html"
                className="link current link-underline"
              >
                Our pets
              </a>
            </li>
            <li className="item">
              <a href="" className="link link-underline">
                Help the shelter
              </a>
            </li>
            <li className="item">
              <a href="" className="link link-underline">
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <img className="burger" height={22} src={burger} alt="" />

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
