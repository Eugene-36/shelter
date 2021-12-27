import React, { useEffect, useState } from 'react';
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

import { getModalLogout } from '../redux/global/global-selector';
import {
  isModalLogoutOpen,
  isModalLogoutClose,
} from '../redux/global/global-action';
//=====================
Modal.setAppElement('#root');

//=======================
function OurPetsCarts() {
  const [state, setState] = useState([]);

  //================================================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnimals());
  }, [dispatch]);

  const result = useSelector(getAllAnimals);

  const linkUrl = 'https://murmuring-woodland-80890.herokuapp.com/';

  //! Модалка чтобы показать инфу про животных========================================
  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  const ModalLogoutClose = () => dispatch(isModalLogoutClose());
  const modalLogout = useSelector(getModalLogout);

  const singleCart = (id, e) => {
    let cart = result.filter(item => item._id === id);
    console.log('cart первый клик', cart);
    setState(cart);
    ModalLogoutOpen();

    console.log('e.target', id);
  };
  console.log('singleCart', state);

  return (
    <>
      <section className={s.back}>
        <div className={styleContainer.container}>
          {/* <PetCartsModal /> */}
          <h2 className={s.headText}>
            Our friends who <br /> are looking for a house
          </h2>

          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.commonBlock}>
                {result.map(({ name, img, id, button, _id }) => (
                  <div className={s.cart} key={id}>
                    <img src={`${linkUrl}${img}`} alt="" />
                    <h3 className={s.sectionTitleInfo}>{name}</h3>
                    <button className={s.bt} onClick={() => singleCart(_id)}>
                      {/*  onClick={'s'} */}
                      <span className={s.text}>
                        {button}
                        {_id}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              {/* ==================== */}
              <div className={s.burgerBtn}>
                <Modal
                  isOpen={modalLogout}
                  onRequestClose={ModalLogoutClose}
                  className={s.modalContent}
                  overlayClassName={s.modalOverlay}
                  contentLabel="Example Modal"
                >
                  <div className={s.logoPosition}>
                    <div className={s.under}>
                      <p>Модалка открылась</p>
                      {state.length &&
                        state.map(
                          ({
                            name,
                            subtitle,
                            description,
                            age,
                            inoculations,
                            diseases,
                            parasites,
                            img,
                          }) => (
                            <>
                              <div>
                                <div>
                                  <p>{name}</p>
                                  <p>{subtitle}</p>
                                  <p>{description}</p>
                                  <p>{age}</p>
                                  <p>{inoculations}</p>
                                  <p>{diseases}</p>
                                  <p>{parasites}</p>
                                  <img src={`${linkUrl}${img}`} alt="" />
                                </div>
                              </div>
                            </>
                          ),
                        )}
                    </div>
                  </div>
                  <div className={s.containerHead}></div>
                </Modal>
              </div>
              {/* =============== */}

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
