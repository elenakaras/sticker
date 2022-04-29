import React from 'react';
import Button from '../Button';
import style from './Header.module.scss';

const Header = () => {
  <header className={style.header}>
    <div className="logo">
      <img src="../../../images/icons/logo.svg" alt="logo" />
      <div className="logo_text">СТИКЕР</div>
    </div>
    <div className="header_search">
      <label htmlFor="{id}">
        <input type="text" />
      </label>
      <Button title="Искать" onClick={() => console.log('Искать')} />
    </div>
    <Button title="Подать объявление" onClick={() => console.log('Подать объявление')} />
    <div className="header_account">
      <img src="../../../images/icons/user.svg" alt="user" />
      <span>Войти</span>
    </div>
  </header>;
};

export default Header;
