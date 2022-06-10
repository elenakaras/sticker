import { Carousel } from 'antd';
import React from 'react';
// import style from './CardCarousel.module.scss';

type CardCarouselPropsType = {
  // alt: string;
  // img: string;
  children: React.ReactNode;
};

const CardCarousel = ({ children }: CardCarouselPropsType) => (
  <Carousel autoplay>
    {/* <div className={style.carousel_item}>
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
      </div> */}
    {children}
  </Carousel>
);

export default CardCarousel;
