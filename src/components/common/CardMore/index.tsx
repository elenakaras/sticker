import React from 'react';
import style from './CardMore.module.scss';

type CardMorePropsType = {
  img: string;
  alt: string;
  cardTitle: string;
};

const CardMore = (props: CardMorePropsType) => {
  const { img, alt } = props;
  const { cardTitle } = props;
  return (
    <div className={style.card_more}>
      <div className={style.more_item}>
        <img src={img} alt={alt} />
        <span>
          {cardTitle}
        </span>
      </div>
    </div>
  );
};

export default CardMore;
