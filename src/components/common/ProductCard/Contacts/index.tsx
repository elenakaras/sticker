import React, { useState } from 'react';
import Button from '../../Button';
import style from './Contacts.module.scss';

type ContactsPropsType = {
  price: string;
};

const Contacts: React.FC<ContactsPropsType> = ({ price }) => {
  const [numVisible, setNumVisible] = useState(false);
  const handler = () => {
    setNumVisible((prev) => !prev);
  };
  return (
    <div className={style.contacts}>
      <div className={style.price}>{price}</div>
      <div>
        <Button
          title={numVisible
            ? '+7 (930) 456-65-69' : 'Показать номер'}
          onClick={handler} />
      </div>
    </div>
  );
};

export default Contacts;
