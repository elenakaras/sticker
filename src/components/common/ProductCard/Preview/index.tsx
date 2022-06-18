import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowBack from '../../images/icons/arrowBack.svg';
import eye from '../../images/icons/eye.svg';
import style from './Preview.module.scss';

type PreviewPropsType = {
  title: string;
  date: string;
  views: string;
};

const Preview: React.FC<PreviewPropsType> = ({ title, date, views }) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };
  return (
    <div className={style.preview}>
      <div className={style.arrowBack}>
        <button type="button" onClick={handler}>
          <img src={arrowBack} alt="arrowBack" />
        </button>
      </div>
      <div className={style.productCard_date}>{date}</div>
      <div className={style.productCard_title}>{title}</div>
      <div className={style.card_views}>
        <img className="card_views-eye" src={eye} alt="eye" />
        <span>{views}</span>
      </div>
    </div>
  );
};

export default Preview;
