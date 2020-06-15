import React from 'react';
import FollowButtonProps from './propTypes';
import { StyledButton } from './style';

const FollowButton = (props) => {
  const { children, clicked } = props;

  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

FollowButton.propTypes = FollowButtonProps;

export default FollowButton;
