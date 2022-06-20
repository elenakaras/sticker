import React from 'react';
import style from './FormHeader.module.scss';

const FormHeader = () => (
  <div className={style.form_header}>
    <h3 className={style.form_title}>Hello, world!</h3>
    <p className={style.form_suptitle}>Создайте аккаунт</p>
  </div>
);

export default FormHeader;
