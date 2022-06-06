import React from 'react';
// import style from 'styled-components';

import { Carousel } from 'antd';
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

const ProductCardPage = () => (
  <PageWrapper>
    <ProductCard
      arrowBack={arrowBack}
      title="Стиральная машина Bosch"
      alt="Стиральная машина"
      descriptionTitle="Описание"
      description="Стиральная машина в отличном состянии, чистая, без накипи. С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      price="22 500 Р"
      date="14 апреля 2022"
      icon={eye}
      views="356"
    />
    <Carousel autoplay>
      <div className="carousel_item">
        <img src={bosch1} alt="Стиральная машина Bosch" />
      </div>
      <div className="carousel_item">
        <img src={bosch2} alt="Стиральная машина Bosch" />
      </div>
      <div className="carousel_item">
        <img src={bosch3} alt="Стиральная машина Bosch" />
      </div>
      <div className="carousel_item">
        <img src={bosch4} alt="Стиральная машина Bosch" />
      </div>
    </Carousel>
    <CardMore
      title="Смотрите также:"
      img={samsung}
      cardTitle="Стиральная машина Samsung"
      alt="Стиральная машина Samsung"
     />
    <CardMore
      title="Смотрите также:"
      img={indesit}
      cardTitle="Стиральная машина Indesit"
      alt="Стиральная машина Indesit"
     />
  </PageWrapper>
);

export default ProductCardPage;
