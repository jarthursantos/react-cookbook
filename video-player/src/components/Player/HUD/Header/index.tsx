import React from 'react';

import {Container, Title} from './styles';
import {ArrowBackIcon} from '~/assets/icons';

const Header: React.FC = () => {
  return (
    <Container>
      <ArrowBackIcon fill="#fff" opacity={0.8} />
      <Title>Gleipnir - T1E1 - Algo dentro de mim</Title>
    </Container>
  );
};

export default Header;
