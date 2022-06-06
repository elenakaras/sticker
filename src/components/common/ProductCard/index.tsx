import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Button, Carousel } from 'antd';
import style from './ProductCard.module.scss';

type ProductCardPropsType = {
  title: string;
  alt: string;
  icon: string;
  description: string;
  price: string;
  date: string;
  views: string;
  arrowBack: string;
  descriptionTitle: string;
};

const ProductCard = (props: ProductCardPropsType) => {
  const { title } = props;
  const { alt } = props;
  const { descriptionTitle, description } = props;
  const { price } = props;
  const { date, arrowBack, views, icon } = props;

  return (
    <div className={style.productCard}>
      <div className={style.arrowBack}>
        <img src={arrowBack} alt={alt} />
      </div>
      <div className={style.productCard_date}>{date}</div>
      <div className={style.productCard_title}>{title}</div>
      <div className={style.card_views}>
        <img className="card_views-eye" src={icon} alt={alt} />
        <span>{views}</span>
      </div>
      <Carousel autoplay />
      <div className={style.productCard_description}>
        <p className={style.description_title}>{descriptionTitle}</p>
        <span className={style.description_text}>
          {description}
        </span>
      </div>
      <div className={style.productCard_location}>
        <p className={style.location_title}>{title}</p>
        <YMaps>
          <div>
            <Map defaultState={{ center: [56.299856, 43.982585], zoom: 9 }} />
          </div>
        </YMaps>
      </div>
      <div>
        <div className={style.productCard_price}>{price}</div>
        <Button />
      </div>
    </div>
  );
};

export default ProductCard;
