import React from 'react';
import { Image } from 'react-native';

// Assets
import logoImg from '../../assets/logo.png';
// Components
import Input from '../../components/Input';
import Button from '../../components/Button';
// Styles
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu login</Title>
      <Input />
      <Input />
      <Button
        onPress={() => {
          console.log('FOi (>');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
