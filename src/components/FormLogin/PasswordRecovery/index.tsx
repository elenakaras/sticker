import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import style from './PasswordRecovery.module.scss';

const RecoveryPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={style.form_wrap}>
      <div className={style.form_recovery}>
        Восстановление пароля
      </div>
      <Form
        className={style.form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
            >
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Некорректный формат адреса электронной почты' }]}
              >
          <Input
            className={style.input}
            title="Email"
            id="email"
            placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button className={style.form_button} type="primary" htmlType="submit">
            Выслать ссылку
          </Button>
        </Form.Item>
        <div className={style.agreement}>
          Выполняя вход в сервис, вы подтверждаете, что
          ознакомились с документами «политика конфидициальности»,
          «согласие на обработку  персональных данных» и
          «пользовательское соглашение» и согласны с ними.
        </div>
      </Form>
    </div>
  );
};

export default RecoveryPassword;
