import React from 'react';
import s from './carts.module.css';
import katrine from '../icons/pets-katrine.png';
import img0 from '../icons-looking-for-a-house/freddi.png';
import img1 from '../icons-looking-for-a-house/pets-charly.png';
import img2 from '../icons-looking-for-a-house/pets-jennifer.png';
import img3 from '../icons-looking-for-a-house/pets-scarlet.png';
import img4 from '../icons-looking-for-a-house/pets-timmy.png';
import img5 from '../icons-looking-for-a-house/pets-woody.png';
import img6 from '../icons-looking-for-a-house/sophia.png';

import left from '../icons/arrow-left (2).svg';
import right from '../icons/arrow-right (2).svg';
import classNames from 'classnames';
import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
//import ArrowLeft from '../arrows/arrowLeft';
// import right from '../icons/arrow-right (2).svg';
// function Carts() {
//   return (
//     <section className={s.back}>
//       <h2 className={s.headText}>
//         Our friends who <br /> are looking for a house
//       </h2>
//       <ul className={classNames(s.list, s['pagination'])}>
//         <li className={s.item}>
//           <div className={s.commonBlock}>
//             <div className={classNames(s.cart, s['page-item'])}>
//               <img src={katrine} alt="" />
//               <h3 className={s.sectionTitleInfo}>Katrine</h3>
//               <button className={s.bt}>
//                 <span className={s.text}>Learn more</span>{' '}
//               </button>
//             </div>
//             <div className={s.cartSecond}>
//               <img src={katrine} alt="" />
//               <h3 className={s.name}>Katrine</h3>
//               <button className={s.btn}>
//                 <span className={s.textInside}>Learn more</span>{' '}
//               </button>
//             </div>
//             <div className={s.cartThird}>
//               <img src={katrine} alt="" />
//               <h3 className={s.name}>Katrine</h3>
//               <button className={s.btn}>
//                 <span className={s.textInside}>Learn more</span>{' '}
//               </button>
//             </div>
//           </div>
//           <div className={s.posBtn}>
//             {/* <ArrowLeft /> */}
//             <div className={s.circle}>
//               <img src={left} alt="" className={s.arrow} />
//             </div>
//             <div className={s.circleSecond}>
//               <img src={right} alt="" className={s.arrow} />
//             </div>
//           </div>
//           <button className={s.getToknow}>Get to know the rest</button>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default Carts;

//! Вверху мой старый вариант
class Carts extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          pic: <img src={katrine} alt="" />,
          name: 'Katrine',
          id: 1,
        },
        {
          pic: <img src={img0} alt="" />,
          name: 'Freddi',
          id: 2,
        },
        {
          pic: <img src={img1} alt="" />,
          name: 'Charly ',
          id: 3,
        },
        {
          pic: <img src={img2} alt="Name" />,
          name: 'Jennifer',
          id: 4,
        },
        {
          pic: <img src={img3} alt="Name" />,
          name: 'Scarlet',
          id: 5,
        },
        {
          pic: <img src={img4} alt="Name" />,
          name: 'Timmy',
          id: 6,
        },
        {
          pic: <img src={img5} alt="Name" />,
          name: 'Woody',
          id: 7,
        },
        {
          pic: <img src={img6} alt="Name" />,
          name: 'Sophia',
          id: 8,
        },
      ],
      currentPage: 1,
      todosPerPage: 2,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3,
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }

  componentDidUpdate() {
    $('ul li.active').removeClass('active');
    $('ul li#' + this.state.currentPage).addClass('active');
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid,
    });
    $('ul li.active').removeClass('active');
    $('ul li#' + listid).addClass('active');
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.todos.length / this.state.todosPerPage,
    );
    this.setState({ isNextBtnActive: 'disabled' });
    this.setState({ isPrevBtnActive: 'disabled' });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: '' });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
      this.setState({ isPrevBtnActive: '' });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  render() {
    const { pro } = this.props;
    console.log(pro);
    const {
      todos,
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive,
    } = this.state;
    //console.log(todos);
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map(({ pic, name, id }) => {
      console.log(id);
      return (
        <div key={id} className={s.commonBlock}>
          <div key={pro} className={classNames(s.cart, s['page-item'])}>
            <li className={s.commonBlock} key={pro}>
              {pic}
            </li>
            <h3 className={s.sectionTitleInfo}>{name}</h3>
            <button className={s.bt}>
              <span className={s.text}>Learn more</span>{' '}
            </button>
          </div>
        </div>
      );
      // <div className={s.commonBlock}>
      // <div className={classNames(s.cart, s['page-item'])}>
      //              <img src={katrine} alt="" />
      //              <h3 className={s.sectionTitleInfo}>Katrine</h3>
      //             <button className={s.bt}>
      //                <span className={s.text}>Learn more</span>{' '}
      //             </button>
      //           </div>
    });
    //  console.log(renderTodos);
    // ! Тут ЛИШКИ - Мои карточки.
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active" id={number}>
            <a href="" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <a href="" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a onClick={this.btnIncrementClick}> &hellip; </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a onClick={this.btnDecrementClick}> &hellip; </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === 'disabled') {
      renderPrevBtn = (
        <li key={uuidv4()} className={classNames(s.circle, isPrevBtnActive)}>
          <img id="btnPrev" src={left} alt="" className={s.arrow} />
        </li>
      );
    } else {
      renderPrevBtn = (
        <li key={uuidv4()} className={classNames(s.circle, isPrevBtnActive)}>
          <a id="btnPrev" onClick={this.btnPrevClick}>
            <img id="btnPrev" src={left} alt="" className={s.arrow} />
          </a>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === 'disabled') {
      renderNextBtn = (
        <li
          key={uuidv4()}
          className={classNames(s.circleSecond, isNextBtnActive)}
        >
          <img id="btnNext" src={right} alt="" className={s.arrow} />
        </li>
      );
    } else {
      renderNextBtn = (
        <li
          key={uuidv4()}
          className={classNames(s.circleSecond, isNextBtnActive)}
        >
          <a id="btnNext" onClick={this.btnNextClick}>
            <img id="btnNext" src={right} alt="" className={s.arrow} />
          </a>
        </li>
      );
    }
    return (
      <section className={s.back}>
        <h2 className={s.headText}>
          Our friends who <br /> are looking for a house
        </h2>
        <ul className={s.commonBlock}>
          <ul className={classNames(s.pos, ['pagination'])}>
            {renderTodos}
            {/* {pageDecrementBtn} */}
            {/* {renderPageNumbers} */}
            {/* {pageIncrementBtn} */}
            {renderPrevBtn}
            {renderNextBtn}
          </ul>
        </ul>
      </section>
    );
  }
}
export default Carts;
