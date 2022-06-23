import React, { useEffect, useState } from 'react';
import Button from '../../components/common/Button';
import Banner from './Banner';
import Nav from '../../components/Nav/nav';
import arrow from '../../components/common/images/icons/arrow.svg';
import style from './MainPage.module.scss';
import MainContent from '../../components/MainContent';

const MainPage = () => {
  useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);
  const [ListVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible(!ListVisible);
  };
  return (
    <div className={style.container}>
      <div className="main_banner">
        <Banner />
      </div>
      <div className="main_menu">
        <Nav />
      </div>
      <div className={style.title}>
        <h3>Вся лента</h3>
      </div>
      <div className={style.main_content}>
        <MainContent />
      </div>
      {ListVisible || <MainContent />}
      <div className={style.button_more}>
        <img src={arrow} alt="arrow" />
        <Button title="Загрузить еще" onClick={handler} />
      </div>
    </div>
  );
};

export default MainPage;
