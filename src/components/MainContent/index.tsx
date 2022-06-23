import React from 'react';
import machine from '../common/images/cards/machine.png';
import eye from '../common/images/icons/eye.svg';
import hat from '../common/images/cards/hat.png';
import hoody from '../common/images/cards/hoody.png';
import bicycle from '../common/images/cards/bicycle.png';
import headphones from '../common/images/cards/headphones.png';
import coffeeMachine from '../common/images/cards/coffeeMachine.png';
import bag from '../common/images/cards/bag.png';
import shoes from '../common/images/cards/shoes.png';
import snowboarding from '../common/images/cards/snowboarding.png';
import style from './MainContent.module.scss';
import Card from '../common/ProductCard/Card/Card';

const MainContent = () => (
  <div className={style.main_content}>
    <Card
      title="Стиральная машина Bosch"
      img={machine}
      alt="Стиральная машина"
      section="Техника"
      description="Машина в хорошем состоянии.
        Возможен разумный торг"
      price="22 500 Р"
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Шапочка"
      img={hat}
      alt="шапочка"
      section="Одежда"
      description="Шапочка детская на ребенка 7-10 лет. 60% шерсть, 40% вискоза"
      price="500 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Толстовка"
      img={hoody}
      alt="толстовка"
      section="Одежда"
      description="Новая толстовка белая без принта с карманом"
      price="2000 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Велосипед"
      img={bicycle}
      alt="Стиральная машина"
      section="Спорт"
      description="Велосипед в отличном состоянии.
      Ретро-стиль"
      price="28 000 Р"
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Наушники"
      img={headphones}
      alt="наушники"
      section="Техника"
      description="Наушники почти новые.
        Срок эксплуатации - меньше месяца"
      price="4 500 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Кофемашина"
      img={coffeeMachine}
      alt="кофемашина"
      section="Техника"
      description="Кофемашина с капучинатором.
        Пакет кофе 1 кг. - в подарок"
      price="2000 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Сумка женская"
      img={bag}
      alt="сумка женская"
      section="Одежда"
      description="Итальянска сумка из натуральной кожи
        Качественная фурнитура,состояние новой"
      price="7 500 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Ботинки мужские зимние"
      img={shoes}
      alt="ботинки мужские зимние"
      section="Одежда"
      description="Ботинки почти новые, качественные, теплые.
        Носили 2 недели"
      price="8 000 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
    <Card
      title="Доска для сноубординга"
      img={snowboarding}
      alt="доска для сноубординга"
      section="Спорт"
      description="Качественная красивая доска с креплениями"
      price="43 000 Р "
      date="14 апреля 2021"
      icon={eye}
      views="356" />
  </div>
);

export default MainContent;
