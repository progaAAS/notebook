import React from 'react';
import s from './public.module.css';

const Public = ({ children }) => {

  return (
    <div className={s.head_logo}>
      <div className={s.form}>
        <h1>TakeOff</h1>
        {children}
      </div>
    </div>
  )
};

export default Public;
