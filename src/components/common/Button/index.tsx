import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonPropsType) => (
  <button className={style.button} onClick={onClick} type="button">
    {title}
  </button>
);

export default Button;
