// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';
// import burger from '../icons/Burger.svg';
// import styles from './modal.module.css';
// import { getAllAnimals } from '../redux/global/global-selector';
// import { useSelector, useDispatch } from 'react-redux';
// import { addAnimals } from '../redux/global/global-operations';
// //import s from '../navigation/navigation.module.css'
// import { Link } from 'react-router-dom';
// import OurPetsCarts from '../ourPetsCarts/OurPetsCarts';
// //=============================================

// import { getModalLogout } from '../redux/global/global-selector';
// import {
//   isModalLogoutOpen,
//   isModalLogoutClose,
// } from '../redux/global/global-action';
// import classNames from 'classnames';

// Modal.setAppElement('#root');

// function PetCartsModal({ props }) {
//   const [state, setState] = useState({ animals: [] });
//   const [show, setShow] = useState(false);
//   const [personState, setPersonState] = useState();

//   const dispatch = useDispatch();
//   const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
//   const ModalLogoutClose = () => dispatch(isModalLogoutClose());

//   useEffect(() => {
//     dispatch(addAnimals());
//   }, [dispatch]);
//   const animals = useSelector(getAllAnimals);
//   console.log('result из OurPetsModal', animals);

//   const modalLogout = useSelector(getModalLogout);

//   return (
//     <div className={styles.burgerBtn}>
//       <Modal
//         isOpen={modalLogout}
//         onRequestClose={ModalLogoutClose}
//         className={styles.modalContent}
//         overlayClassName={styles.modalOverlay}
//         contentLabel="Example Modal"
//       >
//         <div className={styles.logoPosition}>
//           <div className={styles.under}>
//             {animals.map(animal => (
//               <>
//                 <div
//                   style={{ width: '18rem' }}
//                   className="portfolio-card"
//                   onClick={() => {
//                     ModalLogoutOpen();
//                     setPersonState(animal);
//                   }}
//                 >
//                   <div>
//                     <p>{animal.name}</p>
//                     <p>{animal.img}</p>
//                   </div>
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>
//         <div className={styles.containerHead}></div>
//       </Modal>
//     </div>
//   );
// }
// export default PetCartsModal;

// {
//   /* <PetCartsModal props={result} className={s.bt}>
// <span className={s.text}>{button}</span>{' '}
// </PetCartsModal> */
// }
