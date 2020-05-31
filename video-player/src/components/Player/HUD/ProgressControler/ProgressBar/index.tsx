import React from 'react';

import {Container, Progress, ProgressProps} from './styles';

const ProgressBar: React.FC<ProgressProps> = (props) => {
  return (
    <Container>
      <Progress {...props} />
    </Container>
  );
};

export default ProgressBar;
