import React from 'react';
import Button from '../Button';
import style from './Header.module.scss';
import logo from '../images/icons/logo.svg';
import user from '../images/icons/user.svg';

const Header = () => (
  <header className={style.header}>
    <div className={style.logo}>
      <img src={logo} alt="logo" />
      <div className={style.logo_text}>СТИКЕР</div>
    </div>
    <div className={style.header_search}>
      <label htmlFor="{id}">
        <input className={style.header_input} type="text" />
      </label>
      <div className={style.button_search}>
        <Button title="Искать" onClick={() => console.log('Искать')} />
      </div>
    </div>
    <div className={style.button_primary}>
      <Button title="Подать объявление" onClick={() => console.log('Подать объявление')} />
    </div>
    <div className={style.header_account}>
      <img src={user} alt="user" />
      <span>Войти</span>
    </div>
  </header>
);

export default Header;
