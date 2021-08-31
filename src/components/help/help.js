import React from 'react';
import s from './help.module.css';
import food from '../icons/food.svg';
import car from '../icons/car.svg';
import ball from '../icons/ball.svg';
import bowls from '../icons/bowls.svg';
import shampoos from '../icons/shampoos.svg';
import vitamins from '../icons/vitamins.svg';
import syring from '../icons/syringe.svg';
import collar from '../icons/collars-or-leashes.svg';
import sleeping from '../icons/sleeping-area.svg';
function Help() {
  return (
    <>
      <section className={s.top}>
        <h2 className={s.textHelp}>How you can help our shelter</h2>
        <ul className={s.list}>
          <li>
            <img src={food} alt="" />
            <p className={s.text}>Pet food</p>
          </li>
          <li>
            <img src={car} alt="" />
            <p className={s.text}>Transportation</p>
          </li>
          <li className={s.posititon}>
            <img src={ball} alt="" />
            <p className={s.text}>Toys</p>
          </li>
          <li className={s.posititon}>
            <img src={bowls} alt="" />
            <p className={s.text}>Bowls and cups</p>
          </li>
          <li className={s.posititon}>
            <img src={shampoos} alt="" />
            <p className={s.text}>Shampoos</p>
          </li>
          <li className={s.posititon}>
            <img src={vitamins} alt="" />
            <p className={s.text}>Vitamins</p>
          </li>
          <li className={s.posititon}>
            <img src={syring} alt="" />
            <p className={s.text}>Medicines</p>
          </li>
          <li className={s.posititon}>
            <img src={collar} alt="" />
            <p className={s.text}>Collars / leashes</p>
          </li>
          <li className={s.posititon}>
            <img src={sleeping} alt="" />
            <p className={s.text}>Sleeping areas</p>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Help;
