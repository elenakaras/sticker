import React from 'react';
import style from './CardMore.module.scss';

type CardMorePropsType = {
  img: string;
  alt: string;
  title: string;
};

const CardMore: React.FC<CardMorePropsType> = ({ img, alt, title }) => (
  <div className={style.card_more}>
    <div className={style.more_item}>
      <img src={img} alt={alt} />
      <span>
        {title}
      </span>
    </div>
  </div>
);

export default CardMore;
