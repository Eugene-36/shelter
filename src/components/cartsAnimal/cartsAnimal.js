import React from 'react';
import s from './carts.module.css';
import katrine from '../icons/pets-katrine.png';
import left from '../icons/arrow-left (2).svg';
//import ArrowLeft from '../arrows/arrowLeft';
import right from '../icons/arrow-right (2).svg';
function Carts() {
  return (
    <section className={s.back}>
      <h2 className={s.headText}>Our friends who are looking for a house</h2>
      <ul className={s.list}>
        <li>
          <div className={s.cart}>
            <img src={katrine} alt="" />
            <h3 className={s.sectionTitleInfo}>Katrine</h3>
            <button className={s.bt}>
              <span className={s.text}>Learn more</span>{' '}
            </button>
          </div>
          <div className={s.posBtn}>
            {/* <ArrowLeft /> */}
            <div className={s.circle}>
              <img src={left} alt="" className={s.arrow} />
            </div>
            <div className={s.circle}>
              <img src={right} alt="" className={s.arrow}/>
            </div>
          </div>
          <button className={s.getToknow}>Get to know the rest</button>
        </li>
      </ul>
    </section>
  );
}

export default Carts;
