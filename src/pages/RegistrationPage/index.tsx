import React, { useEffect, useState } from 'react';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import PageWrapper from '../../components/common/PageWrapper';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
      console.log({ emailUser: email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  };
  useEffect(() => {
    if (password.length > 0) {
      if (password.length > 10) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  }, [password]);
  return (
    <PageWrapper>
      <Form
        title="Hello, world!"
        suptitle="Создайте аккаунт"
    >
        <Input title="Name" id="name" placeholder="Введите имя" value={name} setValue={setName} />
        <Input title="LastName" id="lastName" placeholder="Введите фамилию" value={lastName} setValue={setLastName} />
        <Input title="Email" id="email" placeholder="Введите почту" value={email} setValue={setEmail} />
        <Input title="Password" id="password" placeholder="Пароль" value={password} setValue={setPassword} type="password" />
        {hasError && (
        <div>
          <span>Пароль должен быть больше 10 символов</span>
        </div>
        )}
        <Input title="Repeat Password" id="repeatPassword" placeholder="Повторите пароль" value={repeatPassword} setValue={setRepeatPassword} type="password" />
        <Button title="Регистрация" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
