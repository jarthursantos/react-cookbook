import React, {ReactNode} from 'react';

import {Container, IconWrapper} from './styles';
import VerticalSlider from '~/components/VerticalSlider';

interface Props {
  icon: ReactNode;
  progress: number;
}

const VerticalBarControl: React.FC<Props> = ({icon, progress}) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>

      <VerticalSlider progress={progress} />
    </Container>
  );
};

export default VerticalBarControl;
