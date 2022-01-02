import React from 'react';
import s from './spinner.module.css';

export default function Spinner(props) {
  return (
    <div className={s.box}>
      <div className={s.plane}></div>
    </div>
  );
}
