import React from 'react';
import style from './CardMore.module.scss';

type CardMorePropsType = {
  title: string;
  img: string;
  alt: string;
  cardTitle: string;
};

const CardMore = (props: CardMorePropsType) => {
  const { title } = props;
  const { img, alt } = props;
  const { cardTitle } = props;
  return (
    <div className={style.card_more}>
      <p>{title}</p>
      <div>
        <img src={img} alt={alt} />
        <span>
          {cardTitle}
        </span>
      </div>
    </div>
  );
};

export default CardMore;
