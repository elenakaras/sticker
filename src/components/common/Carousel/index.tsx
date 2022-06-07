import { Carousel } from 'antd';
import React from 'react';
import style from './CardCarousel.module.scss';

type CardCarouselPropsType = {
  alt: string;
  img: string;
};

const CardCarousel = (props: CardCarouselPropsType) => {
  const { img } = props;
  const { alt } = props;
  return (
    <Carousel autoplay>
      <div className={style.carousel_item}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.carousel_item}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.carousel_item}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.carousel_item}>
        <img src={img} alt={alt} />
      </div>
    </Carousel>
  );
};

export default CardCarousel;
