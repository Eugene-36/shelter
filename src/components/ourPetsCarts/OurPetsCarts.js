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
  //console.log('ModalLogoutOpen', ModalLogoutOpen);
  //================================================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAnimals());
  }, [dispatch]);

  const result = useSelector(getAllAnimals);
  //console.log('result: OurPetsCarts', result);

  const linkUrl = 'https://murmuring-woodland-80890.herokuapp.com/';

  //! Модалка чтобы показать инфу про животных========================================
  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  const ModalLogoutClose = () => dispatch(isModalLogoutClose());
  const modalLogout = useSelector(getModalLogout);

  const singleCart = (id, e) => {
    //singleCartAnimal = singleCartAnimalNew;

    let cart = result.filter(item => item._id === id);
    setState(cart);
    // console.log('singleCartAnimal', singleCartAnimal);
    ModalLogoutOpen();
    console.log('e.target', id);
    console.log('singleCart', result);

    // function b(idToSearch) {
    //   return a.filter(item => {
    //     return item.id === idToSearch
    //   })
    // };

    // const onRemove = (id) => {
    //   setTodos((prevState) => prevState.filter((item) => item.id !== id));
    // };
  };
  console.log('state', state.cart);
  // Проверка state на undefined
  // console.log(Boolean(state));
  // if (state.cart === undefined) {
  //   return null;
  // }
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
                      {/* {state.cart.map(function ({
                        name,
                        subtitle,
                        description,
                        age,
                        inoculations,
                        diseases,
                        parasites,
                        img,
                      }) {
                        return (
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
                        );
                      })} */}
                      {state.cart !== undefined
                        ? state.cart.map(
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
                          )
                        : console.log('ничего нет')}
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
