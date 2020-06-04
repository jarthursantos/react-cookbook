import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BottomBar = styled.TouchableOpacity`
  background: #121212;
  border-color: rgba(255, 255, 255, 0.25);
  border-top-width: ${StyleSheet.hairlineWidth}px;
  height: 56px;
`;

export const LoadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  padding: 0 24px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
`;
