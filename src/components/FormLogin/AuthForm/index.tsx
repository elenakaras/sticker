import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import style from './AuthForm.module.scss';

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
          rules={[{ required: true, message: 'Email' }]}
              >
          <Input className={style.input} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Пароль' }]}
              >
          <Input.Password className={style.input} placeholder="Пароль" />
        </Form.Item>
        <NavLink className={style.navLink_btn} to="/recovery">
          <div className={style.remember_password}>
            Забыли пароль?
          </div>
        </NavLink>
        <Form.Item>
          <Button className={style.form_button} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
