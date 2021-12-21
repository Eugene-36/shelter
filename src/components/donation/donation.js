import React from 'react';
import s from './donation.module.css';
import styleContainer from '../../components/styles/base.module.css';
import donation from '../icons/donation-dog.png';
function Donation() {
  return (
    <section className={s.section}>
      <div className={styleContainer.container}>
        <div className={s.head}>
          <div className={s.mainBlockDonation}>
            <h2 className={s.mainText}>
              You can also <br /> make a donation
            </h2>
            <form action="" className={s.fr}>
              <label htmlFor="">
                <span className={s.spanText}>
                  Name of the bank / Type of bank account
                </span>
                <input
                  type="text"
                  placeholder="4571 6610 2738 1607"
                  className={s.inputDonation}
                />
              </label>
            </form>
            <p className={s.descriprion}>
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
          <img src={donation} alt="" className={s.donationDog} />
        </div>
      </div>
    </section>
  );
}

export default Donation;
