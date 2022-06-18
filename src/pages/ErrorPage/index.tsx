import React from 'react';
// import PageWrapper from '../../components/common/PageWrapper';
import style from './ErrorPage.module.scss';
import error from '../../components/common/images/error.png';

const ErrorPage = () => (
  <div className={style.error_page}>
    <div className={style.error_text}>
      <h3 className={style.error_title}>Упс! Кажется, на эту страницу прилег котик</h3>
      <p className={style.error_suptitle}>Ошибка 404</p>
      <span>Мы уже разбираемся, почему так получилось, скоро все починим.</span>
    </div>
    <div className="error_image">
      <img className="error_img" src={error} alt="error" />
    </div>
  </div>
);

export default ErrorPage;
