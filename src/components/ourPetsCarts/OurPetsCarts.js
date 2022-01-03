import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnimals } from '../redux/global/global-operations';
import { getAllAnimals } from '../redux/global/global-selector';

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
  body.style.overflow = 'auto';
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
    e.preventDefault();
    let cart = result.filter(item => item._id === id);
    setState(cart);
  };

  if (state.length > 0) {
    body.style.overflow = 'hidden';
  }
  const closeModal = () => {
    setState([]);
    ModalLogoutClose();
    body.style.overflow = 'auto';
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
              <div className={result.length > 0 ? s.commonBlock : null}>
                {result.length !== 0 ? (
                  result.map(({ name, img, id, button, _id }) => (
                    <div className={s.cart} key={id}>
                      <img src={`${linkUrl}${img}`} alt="" />
                      <h3 className={s.sectionTitleInfo}>{name}</h3>
                      <button
                        className={s.bt}
                        onClick={e => {
                          singleCart(_id, e);
                          ModalLogoutOpen();
                        }}
                      >
                        <span className={s.text}>{button}</span>
                      </button>
                    </div>
                  ))
                ) : (
                  <Spinner />
                )}
              </div>
              {/* ==================== */}
              {Boolean(state.length) && (
                <Modal
                  isOpen={modalLogout}
                  onRequestClose={closeModal}
                  className={s.modalContent}
                  overlayClassName={s.modalOverlay}
                  contentLabel="Example Modal"
                >
                  <div className={s.logoPosition}>
                    <div className={s.under}>
                      {Boolean(state.length) &&
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
                  <div
                    onClick={e => {
                      ModalLogoutClose();
                      closeModal();
                    }}
                    className={s.closeModal}
                  >
                    <img src={close} alt="cross" />
                  </div>
                </Modal>
              )}

              {/* =============== */}

              <div className={s.posBtn}>
                <div className={s.circle}>
                  <img src={doubleTickLeft} alt="" className={s.arrow} />
                </div>
                <div className={s.circleLeftSide}>
                  <img src={tickLeft} alt="" className={s.arrow} />
                </div>
                <div className={s.circleCenter}>
                  <span className={s.digit}>1</span>
                </div>
                <div className={s.circleSecond}>
                  <img src={doubleTick} alt="" className={s.arrow} />
                </div>
                <div className={s.circleThird}>
                  <img src={tickRight} alt="" className={s.arrow} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default OurPetsCarts;
