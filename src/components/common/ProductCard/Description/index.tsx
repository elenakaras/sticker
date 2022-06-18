import { YMaps, Map } from '@pbe/react-yandex-maps';
import React from 'react';
import style from './Description.module.scss';

type DescriptionPropsType = {
  title: string;
  description: string;
  locationTitle: string;
};

const Description: React.FC<DescriptionPropsType> = ({ title, description, locationTitle }) => (
  <div>
    <div className={style.description}>
      <p className={style.description_title}>{title}</p>
      <span className={style.description_text}>
        {description}
      </span>
    </div>
    <div className={style.location}>
      <p className={style.location_title}>{locationTitle}</p>
      <YMaps>
        <Map defaultState={{ center: [56.150675, 44.206751], zoom: 11 }} width="766px" height="325px" />
      </YMaps>
    </div>
  </div>

);

export default Description;
