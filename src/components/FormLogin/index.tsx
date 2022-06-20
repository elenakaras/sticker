import React from 'react';
import { Tabs } from 'antd';
import FormHeader from './FormHeader';
import AuthForm from './AuthForm';
import RegistrationForm from './RegistrationForm';
import style from './LoginForm.module.scss';

const LoginForm = () => {
  const { TabPane } = Tabs;

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className={style.form_wrapper}>
      <FormHeader />
      <Tabs className={style.tabs_title} defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Авторизация" key="1">
          <AuthForm />
        </TabPane>
        <TabPane tab="Регистрация" key="2">
          <RegistrationForm />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginForm;
