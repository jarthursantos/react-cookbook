import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: space-around;
  flex-direction: row;
  padding: 8px 0 24px;
`;

export const Button = styled(RectButton).attrs({
  rippleColor: '#fff',
})`
  align-items: center;
  flex-direction: row;

  border-radius: 4px;
  padding: 8px 12px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  padding: 0 8px;
`;
