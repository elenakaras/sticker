import React from 'react';
// import { YMaps, Map } from '@pbe/react-yandex-maps';
import style from './ProductCard.module.scss';
// import CardCarousel from './Carousel';
import Preview from './Preview';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import samsung from '../images/ProductCard/samsung.png';
import indesit from '../images/ProductCard/indesit.png';
import Description from './Description';
import Contacts from './Contacts';
import CardMore from './CardMore';
import Gallery from './Gallery';

const ProductCard = () => (
  <div className={style.productCard}>
    <div className={style.productCard_left}>
      <Preview
        title="Стиральная машина Bosch"
        date="14 апреля 2022"
        views="356"
      />
      <Gallery />
      <Description
        title="Описание:"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        locationTitle="Местоположение:  г. Кстово"
      />
    </div>
    <div className={style.productCard_right}>
      <Contacts price="22 500 P" />
      <div className={style.cardMore}>
        <p className={style.cardMore_title}> Смотрите также:</p>
        <CardMore
          title="Стиральная машина Samsung"
          img={samsung}
          alt="Стиральная машина Samsung"
        />
        <CardMore
          title="Стиральная машина Indesit"
          img={indesit}
          alt="Стиральная машина Indesit"
        />
      </div>
    </div>
  </div>
);

export default ProductCard;
