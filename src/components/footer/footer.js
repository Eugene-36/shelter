import React from 'react';
import s from './footer.module.css';
import mail from '../icons/mail.svg';
import phone from '../icons/phone.svg';
import pin from '../icons/pin.svg';
import footerPet from '../icons/footer-puppy.png';
function Footer() {
  return (
    <section className={s.lay}>
      <div className={s.blockFooter}>
        <h2 className={s.mainText}>For questions and suggestions</h2>
        <div className={s.contactsSection}>
          <div className={s.blockContact}>
            <a href="" className={s.email}>
              email@shelter.com
            </a>
            <img src={mail} alt="" />
          </div>
          <div className={s.blockContact}>
            <a href="" className={s.phone}>
              +13 674 567 75 54
            </a>
            <img src={phone} alt="" />
          </div>
        </div>
        <div className={s.visitSection}>
          <h2 className={s.visitSectionText}>We are waiting for your visit</h2>
          <div className={s.blockAdress}>
            <a href="" className={s.textAdress}>
              1 Central Street, Boston (entrance from the store)
            </a>
            <img src={pin} alt="" />
          </div>
          <div className={s.blockAdress}>
            <a href="" className={s.textAdress}>
              18 South Park, London{' '}
            </a>
            <img src={pin} alt="" className={s.imgGap} />
          </div>
        </div>
        <img src={footerPet} alt="" className={s.footerPuppy} />
      </div>
    </section>
  );
}

export default Footer;
