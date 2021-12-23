import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnimals } from '../redux/global/global-operations';
import { getAllAnimals } from '../redux/global/global-selector';
import PetCartsModal from '../ourPetsModal/OurPetsModal';
import Modal from 'react-modal';
//================================================================
import tickRight from '../icons/single-tick-right.svg';
import doubleTick from '../icons/double-tick.svg';
import tickLeft from '../icons/tick-left.svg';
import doubleTickLeft from '../icons/double-tick-left.svg';
import s from './ourPetsCarts.module.css';
import styleContainer from '../../components/styles/base.module.css';
//=====================
Modal.setAppElement('#root');
//=======================
function OurPetsCarts({ ModalLogoutOpen }) {
  console.log('ModalLogoutOpen', ModalLogoutOpen);
  //================================================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnimals());
  }, [dispatch]);
  const result = useSelector(getAllAnimals);
  console.log('result', result);

  const linkUrl = 'https://murmuring-woodland-80890.herokuapp.com/';

  //! Модалка чтобы показать инфу про животных
  const showModalPets = () => {
    console.log('Клик есть');
    return <PetCartsModal />;
  };
  return (
    <>
      <section className={s.back}>
        <div className={styleContainer.container}>
          <h2 className={s.headText}>
            Our friends who <br /> are looking for a house
          </h2>

          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.commonBlock}>
                {result.map(({ name, img, id, button }) => (
                  <div className={s.cart} key={id}>
                    <img src={`${linkUrl}${img}`} alt="" />
                    <h3 className={s.sectionTitleInfo}>{name}</h3>
                    <button className={s.bt} onClick={showModalPets}>
                      <span className={s.text}>{button}</span>{' '}
                    </button>
                  </div>
                ))}
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
        </div>
      </section>
    </>
  );
}

export default OurPetsCarts;
