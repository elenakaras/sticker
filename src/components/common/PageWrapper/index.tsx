import React from 'react';
import { Outlet } from 'react-router-dom';
// import Button from '../Button';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

// type PageWrapperPropsType = {
//   children: React.ReactNode;
// }

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <div><Outlet /></div>
    <Footer />
  </div>
);

export default PageWrapper;
