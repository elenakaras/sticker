import React from 'react';
import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  suptitle: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, suptitle, children }) => (
  <div className={style.form}>
    <h1 className={style.form__title}>{title}</h1>
    <p className={style.form__suptitle}>{suptitle}</p>
    <form className={style.form__body}>{children}</form>
  </div>
);

export default Form;
