import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnimals } from '../redux/global/global-operations';
import { getAllAnimals } from '../redux/global/global-selector';
import PetCartsModal from '../ourPetsModal/OurPetsModal';
import Modal from 'react-modal';
//==========================================
import Spinner from '../spinner/Spinner.js';
//================================================================
import tickRight from '../icons/single-tick-right.svg';
import doubleTick from '../icons/double-tick.svg';
import tickLeft from '../icons/tick-left.svg';
import doubleTickLeft from '../icons/double-tick-left.svg';
import close from '../icons/Vector.svg';
import s from './ourPetsCarts.module.css';
import styleContainer from '../../components/styles/base.module.css';

import { getModalLogout } from '../redux/global/global-selector';
import {
  isModalLogoutOpen,
  isModalLogoutClose,
} from '../redux/global/global-action';
import { v4 as uuidv4 } from 'uuid';

//=====================
Modal.setAppElement('#root');

//=======================
function OurPetsCarts() {
  const [state, setState] = useState([]);
  const body = document.querySelector('body');
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

  const singleCart = id => {
    let cart = result.filter(item => item._id === id);

    setState(cart);
    ModalLogoutOpen();

    console.log('e.target', id);
  };
  console.log('singleCart', state);

  const truthyStatment = Boolean(modalLogout);

  if (truthyStatment) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

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
                {result.length === 0 ? (
                  <Spinner />
                ) : (
                  result.map(({ name, img, id, button, _id }) => (
                    <div className={s.cart} key={id}>
                      <img src={`${linkUrl}${img}`} alt="" />
                      <h3 className={s.sectionTitleInfo}>{name}</h3>
                      <button className={s.bt} onClick={() => singleCart(_id)}>
                        {/*  onClick={'s'} */}
                        <span className={s.text}>
                          {button}
                          {/* {_id} */}
                        </span>
                      </button>
                    </div>
                  ))
                )}
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
                            id,
                          }) => (
                            <div className={s.photo} key={uuidv4()}>
                              <ul className={s.listItems}>
                                <li className={s.petName}>{name}</li>
                                <li className={s.subtitle}>{subtitle}</li>
                                <li className={s.text}>{description}</li>
                                <li className={s.space}>
                                  <b>Age:</b> {age}
                                </li>
                                <li className={s.space}>
                                  <b>Inoculations:</b> {inoculations}
                                </li>
                                <li className={s.space}>
                                  <b>Diseases:</b> {diseases}
                                </li>
                                <li className={s.space}>
                                  <b> Parasites:</b> {parasites}
                                </li>
                              </ul>
                              <div className={s.petBlock}>
                                <img
                                  className={s.petSize}
                                  src={`${linkUrl}${img}`}
                                  alt=""
                                />
                              </div>
                            </div>
                          ),
                        )}
                    </div>
                  </div>
                  <div onClick={ModalLogoutClose} className={s.closeModal}>
                    <img src={close} alt="" />
                  </div>
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
