import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = (props) => {
  const { children } = props;
  return <StyledButton type="submit">{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
