import { Button } from 'antd';
import React from 'react';
import ArrowBack from '../common/ArrowBack';
import Input from '../common/Input';

type AdFormPropsType = {
  title: string;
  placeholder: string;
  id: string;
};

const AdForm: React.FC<AdFormPropsType> = ({ title, placeholder, id }) => (
  <div className="adForm">
    <ArrowBack />
    <div>
      <h3 className="adForm_title">{title}</h3>
      <Button
        className="adForm__button"
        type="primary"
        htmlType="submit">
        Сохранить
      </Button>
    </div>
    <div className="product_name">
      <Input title={title} id={id} placeholder={placeholder} />
    </div>

  </div>
);

export default AdForm;
