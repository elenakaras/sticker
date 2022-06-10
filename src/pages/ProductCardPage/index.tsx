import React from 'react';

// import style from 'styled-components';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Button from '../../components/common/Button';
import PageWrapper from '../../components/common/PageWrapper';
import ProductCard from '../../components/common/ProductCard';
import arrowBack from '../../components/common/images/icons/arrowBack.svg';
import eye from '../../components/common/images/icons/eye.svg';
import samsung from '../../components/common/images/ProductCard/samsung.png';
import indesit from '../../components/common/images/ProductCard/indesit.png';
import bosch1 from '../../components/common/images/ProductCard/bosch1.png';
import bosch2 from '../../components/common/images/ProductCard/bosch2.png';
import bosch3 from '../../components/common/images/ProductCard/bosch3.png';
import bosch4 from '../../components/common/images/ProductCard/bosch4.png';
import CardMore from '../../components/common/CardMore';
import CardCarousel from '../../components/common/Carousel';
import style from './ProductCard.module.scss';

// const ProductCardPage = () => (
//   <PageWrapper>
//     <ProductCard
//       arrowBack={arrowBack}
//       title="Стиральная машина Bosch"
//       alt="Стиральная машина"
//       descriptionTitle="Описание:"
//       description="Стиральная машина в отличном состянии, чистая, без накипи.
//       С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
//       price="22 500 Р"
//       date="14 апреля 2022"
//       icon={eye}
//       views="356"
//       locationTitle="Местоположение:  г. Кстово"
//     />
//     <CardCarousel>
//       <div className="carousel_wrap">
//         <div className="carousel_item">
//           <img src={bosch1} alt="Стиральная машина Bosch" />
//         </div>
//         <div className="carousel_item">
//           <img src={bosch2} alt="Стиральная машина Bosch" />
//         </div>
//         <div className="carousel_item">
//           <img src={bosch3} alt="Стиральная машина Bosch" />
//         </div>
//         <div className="carousel_item">
//           <img src={bosch4} alt="Стиральная машина Bosch" />
//         </div>
//       </div>
//     </CardCarousel>
//     <CardMore
//       title="Смотрите также:"
//       img={samsung}
//       cardTitle="Стиральная машина Samsung"
//       alt="Стиральная машина Samsung"
//      />
//     <CardMore
//       title="Смотрите также:"
//       img={indesit}
//       cardTitle="Стиральная машина Indesit"
//       alt="Стиральная машина Indesit"
//      />
//   </PageWrapper>
// );

const ProductCardPage = () => (
  <PageWrapper>
    <ProductCard>
      <div className={style.productCard_wrap}>
        <div className={style.productCard}>
          <div className={style.productCard_left}>
            <div className={style.arrowBack}>
              <img src={arrowBack} alt="arrowBack" />
            </div>
            <div className={style.productCard_date}>14 апреля 2022</div>
            <div className={style.productCard_title}>Стиральная машина Bosch</div>
            <div className={style.card_views}>
              <img className="card_views-eye" src={eye} alt="eye" />
              <span>356</span>
            </div>
            <CardCarousel>
              <div className={style.cardCarousel}>
                <div className={style.carousel_item}>
                  <img src={bosch1} alt="Стиральная машина Bosch" />
                </div>
                <div className={style.carousel_item}>
                  <img src={bosch2} alt="Стиральная машина Bosch" />
                </div>
                <div className={style.carousel_item}>
                  <img src={bosch3} alt="Стиральная машина Bosch" />
                </div>
                <div className={style.carousel_item}>
                  <img src={bosch4} alt="Стиральная машина Bosch" />
                </div>
              </div>

            </CardCarousel>
            <div className={style.productCard_description}>
              <p className={style.description_title}>Описание</p>
              <span className={style.description_text}>
                Стиральная машина в отличном состянии, чистая, без накипи.
                <br />
                {' '}
                С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.
              </span>
            </div>
            <div className={style.productCard_location}>
              <p className={style.location_title}>
                Местоположение:
                {' '}
                <span>г.Кстово</span>
                {' '}
              </p>
              <YMaps>
                <div className={style.location_map}>
                  <Map defaultState={{ center: [56.299856, 43.982585], zoom: 9 }} width="766px" height="325px" />
                </div>
              </YMaps>
            </div>
          </div>
        </div>
        <div className={style.productCard_right}>
          <div className={style.productCard_contact}>
            <div className={style.productCard_price}>22 500 Р</div>
            <Button title="Показать номер" onClick={() => console.log('Показать номер')} />
          </div>
          <div className={style.more_title}>Смотрите также:</div>
          <CardMore
            img={samsung}
            alt="Стиральная машина Samsung"
            cardTitle="Стиральная машина Samsung"
          />
          <CardMore
            img={indesit}
            alt="Стиральная машина Indesit"
            cardTitle="Стиральная машина Indesit"
          />
        </div>
      </div>

    </ProductCard>
  </PageWrapper>
);

export default ProductCardPage;
