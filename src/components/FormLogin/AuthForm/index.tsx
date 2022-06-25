import React from 'react';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';

import style from './AuthForm.module.scss';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} Некорректный email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AuthForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={style.form_wrap}>
      <Form
        className={style.form}
        name="nest-messages"
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Некорректный формат адреса электронной почты' }]}
            >
          <Input
            className={style.input}
            title="Email"
            id="email"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, min: 8, max: 20, message: 'Пароль должен быть не менее 8 символов' }]}
              >
          <Input.Password
            className={style.input}
            title="Password"
            id="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <NavLink className={style.navLink_btn} to="/recovery">
          <div className={style.remember_password}>
            Забыли пароль?
          </div>
        </NavLink>
        <Form.Item>
          <Button
            className={style.form_button}
            type="primary"
            htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;

// rules={[{ type: 'number', min: 0, max: 99 }]}>
// вставить в графу имя в форме регистрации( до 15 смиволов дб по ТЗ)
