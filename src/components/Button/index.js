import React from 'react';

import { Container, ButtonText } from './styles';

const Button = ({ children }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
