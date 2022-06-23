import React, { useState } from 'react';
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hasError, setHasError] = useState(false);

  const submitHandler = () => {
    if (password.length > 8) {
      setHasError(false);
      console.log({ email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
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
          <Input
            className={style.input}
            title="Email"
            id="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Пароль' }]}
              >
          <Input.Password
            className={style.input}
            title="Password"
            id="password"
            placeholder="Пароль"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </Form.Item>
        {hasError && (
          <div>
            <span>Пароль должен быть больше 8 символов</span>
          </div>
        )}
        <NavLink className={style.navLink_btn} to="/recovery">
          <div className={style.remember_password}>
            Забыли пароль?
          </div>
        </NavLink>
        <Form.Item>
          <Button
            className={style.form_button}
            onClick={submitHandler}
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
