import React from 'react';
import style from './Footer.module.scss';
import logo from '../images/icons/logo.svg';
import fb from '../images/icons/fb.svg';
import inst from '../images/icons/inst.svg';
import vk from '../images/icons/vk.svg';

const Footer = () => (
  <footer className={style.footer}>
    <div className="footer_container">
      <div className={style.footer_logo}>
        <img src={logo} alt="logo" />
        <div className={style.logo_title}>СТИКЕР</div>
        <div className={style.logo_line}>|</div>
        <div className={style.logo_text}>Доска объявлений</div>
      </div>
      <div className={style.footer_copyright}>© ООО «Доска диджитал», 2022</div>
      <div className={style.footer_icons}>
        <a href="https://facebook.com">
          <img src={fb} alt="faceboock" />
        </a>
        <a href="https://www.instagram.com">
          <img src={inst} alt="instagram" />
        </a>
        <a href="https://www.vk.com">
          <img src={vk} alt="vk" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
