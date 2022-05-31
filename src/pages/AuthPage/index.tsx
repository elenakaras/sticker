import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import style from './AuthPage.module.scss';
import PageWrapper from '../../components/common/PageWrapper';

const RegistrationPage: React.FC = () => {
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
    <PageWrapper>
      <div className={style.form_header}>
        <h3 className={style.form_title}>Hello, world!</h3>
        <p className={style.form_suptitle}>Создайте аккаунт</p>
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
          <Input className={style.input} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Пароль' }]}
        >
          <Input.Password className={style.input} placeholder="Пароль" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Повторите пароль' }]}
        >
          <Input.Password className={style.input} placeholder="Повторите пароль" />
        </Form.Item>

        <p className={style.form_checkbox}>
          <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
            Принимаю условия
            {' '}
            <br />
            Пользовательского соглашения
          </Checkbox>
        </p>

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
