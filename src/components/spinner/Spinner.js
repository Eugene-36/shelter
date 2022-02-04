import React from 'react';
import s from './spinner.module.css';
import classNames from 'classnames';

export default function Spinner() {
  return (
    <div className={s.common_container}>
      <div className={s.loading__ball_container}>
        <div className={s.loading__ball_animate}>
          <div className={classNames(s.loading__ball_item, s.first)}></div>
          <div
            className={classNames(s.loading__ball_shadow, s.first_shadow)}
          ></div>
        </div>
        <div className={s.loading__ball_item}></div>
        <div className={s.loading__ball_item}></div>
        <div className={s.loading__ball_item}></div>
        <div className={s.loading__ball_item}></div>
        <div className={s.loading__ball_item}></div>
        <div className={s.loading__ball_animate}>
          <div className={classNames(s.loading__ball_item, s.last)}></div>
          <div
            className={classNames(s.loading__ball_shadow, s.last_shadow)}
          ></div>
        </div>
      </div>
      <div className={s.loading__text}>
        <span>Loading...</span>
      </div>
    </div>
  );
}
