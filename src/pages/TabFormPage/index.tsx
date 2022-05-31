import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AuthPage from '../AuthPage';
import RegistrationPage from '../RegistrationPage';
import style from './TabFormPage.module.scss';

const TabForm = () => (
  <Tabs>
    <TabList className={style.tab_header}>
      <Tab className={style.tab_title}>Регистрация</Tab>
      <Tab className={style.tab_title}>Авторизация</Tab>
    </TabList>
    <TabPanel>
      <RegistrationPage />
    </TabPanel>
    <TabPanel>
      <AuthPage />
    </TabPanel>
  </Tabs>
);

export default TabForm;
