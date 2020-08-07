import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}
interface ProviderNameProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity``;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;
export const UserAvatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  margin-left: auto;
`;
export const ProvidersListContainer = styled.View`
  height: 112px;
`;
export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 30px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 0 24px 24px;
`;

export const ShowDatePickerButton = styled(RectButton)`
  height: 50px;
  margin: 0 24px;
  align-items: center;
  justify-content: center;
  background: #ff9000;
  border-radius: 10px;
`;

export const ShowDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;
