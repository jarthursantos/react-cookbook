import React from 'react';

import {Container, Progress, ProgressProps} from './styles';

const VerticalSlider: React.FC<ProgressProps> = (props) => {
  return (
    <Container>
      <Progress {...props} />
    </Container>
  );
};

export default VerticalSlider;
