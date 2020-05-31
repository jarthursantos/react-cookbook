import styled from 'styled-components/native';

export const TouchArea = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;
