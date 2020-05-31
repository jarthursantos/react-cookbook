import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  padding: 0 48px;
  height: 150px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;
