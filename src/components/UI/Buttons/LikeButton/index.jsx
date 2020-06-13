import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const LikeButton = (props) => {
  const { children, clicked } = props;

  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

LikeButton.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default LikeButton;
