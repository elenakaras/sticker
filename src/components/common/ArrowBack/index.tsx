import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowBack from '../images/icons/arrowBack.svg';
import style from './ArrowBack.module.scss';

const ArrowBack = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };
  return (
    <div className={style.arrowBack}>
      <button type="button" onClick={handler}>
        <img src={arrowBack} alt="arrowBack" />
      </button>
    </div>
  );
};
export default ArrowBack;
