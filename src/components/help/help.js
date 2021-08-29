import React from 'react';
import s from './help.module.css';
function Help() {
  return (
    <>
      <section>
        <h2 className={s.textHelp}>How you can help our shelter</h2>
        <ul className={s.list}>
          <li>Pet food</li>
          <li>Transportation</li>
          <li>Toys</li>
          <li>Bowls and cups</li>
          <li>Shampoos</li>
          <li>Vitamins</li>
          <li>Medicines</li>
          <li>Collars / leashes</li>
          <li>Sleeping areas</li>
        </ul>
      </section>
    </>
  );
}
export default Help;
