import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
      content
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
