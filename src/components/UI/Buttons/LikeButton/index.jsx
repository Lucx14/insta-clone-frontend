import React from 'react';
import LikeButtonProps from './propTypes';
import { StyledButton } from './style';

const LikeButton = (props) => {
  const { children, clicked } = props;

  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

LikeButton.propTypes = LikeButtonProps;

export default LikeButton;
