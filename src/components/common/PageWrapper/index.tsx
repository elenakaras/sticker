import React from 'react';
import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';
import arrow from '../images/icons/arrow.svg';

type PageWrapperPropsType = {
  children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperPropsType) => {
  const { children } = props;
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div>{children}</div>
      <div className={style.button_more}>
        <img src={arrow} alt="arrow" />
        <Button title="Загрузить еще" onClick={() => console.log('Загрузить еще')} />
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
