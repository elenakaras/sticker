import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Button } from 'antd';
import PageWrapper from '../../components/common/PageWrapper';
import style from './ProductCard.module.scss';

type ProductCardPropsType = {
  title: string;
  img: string;
  alt: string;
  icon: string;
  description: string;
  price: string;
  date: string;
  views: string;
};

const ProductCard = (props: ProductCardPropsType) => {
  const { img, alt } = props;
  const { title, description } = props;
  const { price } = props;
  const { date, icon, views } = props;
  return (
    <PageWrapper>
      <div className={style.productCard}>
        <div className={style.arrowBack}>
          <img src={img} alt={alt} />
        </div>
        <div className={style.productCard_date}>{date}</div>
        <div className={style.productCard_title}>{title}</div>
        <div className={style.card_views}>
          <img className="card_views-eye" src={icon} alt={alt} />
          <span>{views}</span>
        </div>
        <div>КАРУСЕЛЬ</div>
        <div className={style.productCard_description}>
          <p className={style.description_title}>{title}</p>
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
          <div className={style.productCard_more}>
            <p>Смотрите также:</p>
            <img src={img} alt={alt} />
            <span>
              Стиральная машина
              {' '}
              <br />
              {' '}
              Samsung
            </span>
            <img src={img} alt={alt} />
            <span>
              Стиральная машина
              {' '}
              <br />
              {' '}
              Indesit
            </span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductCard;
