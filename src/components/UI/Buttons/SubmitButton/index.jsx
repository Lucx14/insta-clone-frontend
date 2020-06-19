import React from 'react';
import ButtonProps from './propTypes';
import { StyledButton } from './style';

const Button = (props) => {
  const { children, disabled } = props;
  return (
    <StyledButton type="submit" disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = ButtonProps;

export default Button;
