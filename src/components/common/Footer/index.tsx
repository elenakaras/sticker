import React from 'react';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className="footer_container">
      <div className="logo">
        <img src="../../../images/icons/logo.svg" alt="logo" />
        <div className="logo_text">СТИКЕР</div>
        <span>| Доска объявлений</span>
      </div>
      <div className="footer_copyright">© ООО «Доска диджитал», 2022</div>
      <div className="footer_icons">
        <a href="https://facebook.com">
          <img src="../../../images/icons/fb.svg" alt="" />
        </a>
        <a href="https://www.instagram.com">
          <img src="../../../images/icons/inst.svg" alt="" />
        </a>
        <a href="https://www.vk.com">
          <img src="../../../images/icons/vk.svg" alt="" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
