import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Button';
import style from './Card.module.scss';

type CardPropsType = {
  title: string;
  img: string;
  alt: string;
  icon: string;
  section: string;
  description: string;
  price: string;
  date: string;
  views: string;
};

const Card = (props: CardPropsType) => {
  const { img, alt, section } = props;
  const { title, description } = props;
  const { price } = props;
  const { date, icon, views } = props;
  return (
    <div className={style.card}>
      <div className={style.card_image}>
        <NavLink className={style.navLink_btn} to="/card">
          <img src={img} alt={alt} />
          <Button title={section} onClick={() => console.log({ section })} />
        </NavLink>
      </div>
      <div className={style.card_content}>
        <NavLink to="/card"><h3 className={style.card_title}>{title}</h3></NavLink>
        <p className={style.card_description}>{description}</p>
      </div>
      <div className={style.card_price}>{price}</div>
      <div className={style.card_activity}>
        <span className={style.card_date}>{date}</span>
        <div className={style.card_views}>
          <img className="card_views-eye" src={icon} alt={alt} />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
