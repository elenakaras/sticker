import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Tabs } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
// import { NavLink } from 'react-router-dom';
import style from './RegistrationForm.module.scss';

const RegistrationForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [checked, setChecked] = useState(true);
  const [disabled] = useState(false);

  const onChange = (e: CheckboxChangeEvent): void => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
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
          name="name"
          rules={[{ required: true, message: 'Имя' }]}
          >
          <Input className={style.input} placeholder="Имя" />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[{ required: true, message: 'Фамилия' }]}
          >
          <Input className={style.input} placeholder="Фамилия" />
        </Form.Item>

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

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Повторите пароль' }]}
          >
          <Input.Password
            className={style.input}
            title="Password"
            id="repeatPassword"
            placeholder="Повторите пароль"
            value={password}
            setValue={setPassword}
            type="password" />
        </Form.Item>
        {hasError && (
          <div>
            <span>Пароль должен быть больше 8 символов</span>
          </div>
        )}
        <div className={style.form_checkbox}>
          <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
            Принимаю условия
            {' '}
            <br />
            Пользовательского соглашения
          </Checkbox>
        </div>

        <Form.Item>
          <Button
            className={style.form_button}
            onClick={submitHandler}
            type="primary"
            htmlType="submit">
            Создать аккаунт
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
