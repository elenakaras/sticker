import React from 'react';
import banner from '../../../components/common/images/banner.png';
import style from './Banner.module.scss';

const Banner = () => (
  <div className={style.banner}>
    <div className={style.banner_text}>
      <h1 className={style.banner_title}>Доска объявлений</h1>
      <p className={style.banner_suptitle}>
        Находи тысячи разнообразных товаров и услуг
        {' '}
        <br />
        от продавцов со всей страны. Безопасные расчеты.
        {' '}
        <br />
        Удобный сервис доставки
      </p>
    </div>
    <div className={style.banner_image}>
      <img src={banner} alt="banner" />
    </div>
  </div>
);

export default Banner;
