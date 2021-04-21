import React from 'react';

import { Container, TextInput, Icon } from './styles';

const Input = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} color="#666360" size={20} />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;
