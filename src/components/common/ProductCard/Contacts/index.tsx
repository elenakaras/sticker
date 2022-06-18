import React from 'react';
import Button from '../../Button';
import style from './Contacts.module.scss';

type ContactsPropsType = {
  price: string;
};

const Contacts: React.FC<ContactsPropsType> = ({ price }) => (
  <div className={style.contacts}>
    <div className={style.price}>{price}</div>
    <Button title="Показать номер" onClick={() => console.log('Показать номер')} />
  </div>
);

export default Contacts;
