import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Пароли не совпадают'));
              },
            }),
          ]}
        >
          <Input.Password
            className={style.input}
            title="Password"
            id="repeatPassword"
            placeholder="Повторите пароль"
           />
        </Form.Item>
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
