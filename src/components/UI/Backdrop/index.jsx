import React from 'react';
import BackdropProps from './propTypes';
import { Wrapper } from './style';

const Backdrop = (props) => {
  const { show, clicked } = props;

  return <>{show ? <Wrapper onClick={clicked} /> : null}</>;
};

Backdrop.propTypes = BackdropProps;

export default Backdrop;
