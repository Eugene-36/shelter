import React from 'react';
import s from './donation.module.css';
import donation from '../icons/donation-dog.png';
function Donation() {
  return (
    <section className={s.section}>
      <div className={s.head}>
        <h2 className={s.mainText}>You can also make a donation</h2>
        <form action="" className={s.fr}>
          <label htmlFor="">
            <span className={s.spanText}>
              Name of the bank / Type of bank account
            </span>
            <input type="text" className={s.inp} />
          </label>
        </form>
        <p className={s.descriprion}>
          Legal information and lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac
          diam. Praesent ultrices maximus tortor et vulputate. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <img src={donation} alt="" className={s.donationDog} />
      </div>
    </section>
  );
}

export default Donation;
