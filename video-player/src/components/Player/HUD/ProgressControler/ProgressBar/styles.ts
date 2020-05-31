import styled from 'styled-components/native';

export interface ProgressProps {
  progress: number;
}

export const Container = styled.View`
  justify-content: flex-end;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  flex: 1;
  height: 4px;
`;

export const Progress = styled.View<ProgressProps>`
  background: #fff;
  border-radius: 2px;
  height: 4px;
  width: ${({progress}) => progress}%;
`;
