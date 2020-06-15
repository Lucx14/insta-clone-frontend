import React from 'react';
import ButtonProps from './propTypes';
import { StyledButton } from './style';

const Button = (props) => {
  const { children } = props;
  return <StyledButton type="submit">{children}</StyledButton>;
};

Button.propTypes = ButtonProps;

export default Button;
