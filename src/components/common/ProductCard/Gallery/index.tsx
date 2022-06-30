import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import bosch1 from '../../images/ProductCard/bosch1.png';
import bosch2 from '../../images/ProductCard/bosch2.png';
import bosch3 from '../../images/ProductCard/bosch3.png';
import bosch4 from '../../images/ProductCard/bosch4.png';
import style from './Gallery.module.scss';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className={style.gallery_item} src={bosch1} onDragStart={handleDragStart} alt="стиральная машина bosch" />,
  <img className={style.gallery_item} src={bosch2} onDragStart={handleDragStart} alt="стиральная машина bosch" />,
  <img className={style.gallery_item} src={bosch3} onDragStart={handleDragStart} alt="стиральная машина bosch" />,
  <img className={style.gallery_item} src={bosch4} onDragStart={handleDragStart} alt="стиральная машина bosch" />,
];

const Gallery = () => (
  <AliceCarousel disableButtonsControls mouseTracking items={items} />
);

export default Gallery;
