import React from 'react'; 
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  // value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  // type?: 'text' | 'password';
};

const Input = ({ title, id, placeholder }: InputPropsType) => {
  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} placeholder={placeholder} />
    </label>
  );
};

export default Input;
