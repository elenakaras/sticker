import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import style from './AuthPage.module.scss';
import PageWrapper from '../../components/common/PageWrapper';
// import TabForm from '../TabFormPage';

const RegistrationPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageWrapper>
      <div className={style.form_header}>
        <h3 className={style.form_title}>Hello, world!</h3>
        <p className={style.form_suptitle}>Создайте аккаунт</p>
      </div>
      <div className={style.form_toggle}>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)} to="/registration">Регистрация</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)} to="/auth">Авторизация</NavLink>
          </li>
        </ul>
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

        <Form.Item>
          <Button className={style.form_button} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
