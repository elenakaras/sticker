import React from 'react';
import Card from '../Card/Card';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

type PageWrapperPropsType = {
  children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperPropsType) => {
  const { children } = props;
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

// const PageWrapper = () => (
//   <div className={style.page_wrapper}>
//     <Header />
//     <main className={style.content} />
//     <Footer />
//   </div>
// );

export default PageWrapper;
