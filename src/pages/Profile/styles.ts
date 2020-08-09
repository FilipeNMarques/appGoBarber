import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #312e38;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  /* margin-top: -50px; */
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const ExitButton = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #b02323;
  border-radius: 10px;

  padding: 0 30px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const ExitButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 19px;
`;
