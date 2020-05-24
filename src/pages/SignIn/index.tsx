import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Assets
import logoImg from '../../assets/logo.png';
// Components
import Input from '../../components/Input';
import Button from '../../components/Button';
// Styles
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input name="email" icon="mail" placeholder="Seu email" />
            <Input name="password" icon="lock" placeholder="Sua senha" />
            <Button
              onPress={() => {
                console.log('Foi (>');
              }}
            >
              Entrar
            </Button>
            <ForgotPassword
              onPress={() => {
                console.log('Esqueci minha senha');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton
        onPress={() => {
          console.log('CreateAccount');
        }}
      >
        <Icon name="log-in" color="#ff9000" size={20} />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
