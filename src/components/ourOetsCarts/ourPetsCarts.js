import React from 'react';
import katrine from '../icons/pets-katrine.png';
import tickRight from '../icons/single-tick-right.svg';
import doubleTick from '../icons/double-tick.svg';
import tickLeft from '../icons/tick-left.svg';
import doubleTickLeft from '../icons/double-tick-left.svg';
import s from './ourPetsCarts.module.css';
function OurPetsCarts() {
  
  return (
    <>
      <section className={s.back}>
        <h2 className={s.headText}>
          Our friends who <br /> are looking for a house
        </h2>
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.commonBlock}>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cart}>
                <img src={katrine} alt="" />
                <h3 className={s.sectionTitleInfo}>Katrine</h3>
                <button className={s.bt}>
                  <span className={s.text}>Learn more</span>{' '}
                </button>
              </div>
              {/* <div className={s.cartSecond}>
                <img src={katrine} alt="" />
                <h3 className={s.name}>Katrine</h3>
                <button className={s.btn}>
                  <span className={s.textInside}>Learn more</span>{' '}
                </button>
              </div>
              <div className={s.cartThird}>
                <img src={katrine} alt="" />
                <h3 className={s.name}>Katrine</h3>
                <button className={s.btn}>
                  <span className={s.textInside}>Learn more</span>{' '}
                </button>
              </div> */}
            </div>
            <div className={s.posBtn}>
              {/* <ArrowLeft /> */}
              <div className={s.circle}>
                <img src={doubleTickLeft} alt="" className={s.arrow} />
              </div>
              <div className={s.circleLeftSide}>
                <img src={tickLeft} alt="" className={s.arrow} />
              </div>
              <div className={s.circleCenter}>
                {/* <img src={doubleTick} alt="" className={s.arrow} /> */}
                <span className={s.digit}>1</span>
              </div>
              <div className={s.circleSecond}>
                <img src={doubleTick} alt="" className={s.arrow} />
              </div>
              <div className={s.circleThird}>
                <img src={tickRight} alt="" className={s.arrow} />
              </div>
            </div>
            {/* <button className={s.getToknow}>Get to know the rest</button> */}
          </li>
        </ul>
      </section>
    </>
  );
}

export default OurPetsCarts;
