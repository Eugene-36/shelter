import React from 'react';
import Modal from 'react-modal';
//=============================================
import { useSelector, useDispatch } from 'react-redux';
//import { getUserName } from '../redux/auth/auth-selectors';
//import { getModalLogout } from '../redux/global/global-selector';
import { isModalLogoutOpen } from '../redux/global/global-action';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalWin() {
  const dispatch = useDispatch();
  //const modalLogout = useSelector(getModalLogout);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalWin;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUserName } from '../../redux/auth/auth-selectors';
// import { isModalLogoutOpen } from '../../redux/global/global-action';
// import styles from './UserMenu.module.css';
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

// export default function UserMenu() {
//   const dispatch = useDispatch();
//   const name = useSelector(getUserName);
//   const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());

//   return (
//     <div className={styles.user_menu_container}>
//       <span className={styles.user_name}>{name}</span>
//       <span className={styles.user_name_2}>|</span>

//       <div className={styles.out} onClick={ModalLogoutOpen}>
//         <button className={styles.out_icon} type="button"></button>
//         <span className={styles.user_out}>Выйти</span>
//       </div>
//     </div>
//   );
// }
