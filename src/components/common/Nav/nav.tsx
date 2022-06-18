import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.main_menu}>
      <li className={style.main_menuLink}>
        <NavLink className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)} to="/">Вся доска</NavLink>
      </li>
      <li className={style.main_menuLink}>Автомобили</li>
      <li className={style.main_menuLink}>Аксессуары</li>
      <li className={style.main_menuLink}>Мебель</li>
      <li className={style.main_menuLink}>Одежда</li>
      <li className={style.main_menuLink}>Спорт</li>
      <li className={style.main_menuLink}>Техника</li>
      <li className={style.main_menuLink}>Товары для дома</li>
    </ul>
  </nav>
);

export default Nav;
