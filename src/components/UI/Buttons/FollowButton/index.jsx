import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const FollowButton = (props) => {
  const { children, clicked } = props;

  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

FollowButton.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default FollowButton;
