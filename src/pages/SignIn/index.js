import React from 'react';
import { Image } from 'react-native';

import Imput from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Imput name="email" icon="mail" placeholder="E-mail" />
      <Imput name="password" icon="lock" placeholder="Senha" />
      <Button
        onPress={() => {
          console.log('Deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
