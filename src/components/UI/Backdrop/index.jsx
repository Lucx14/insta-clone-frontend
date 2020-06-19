import React from 'react';
import BackdropProps from './propTypes';
import { Wrapper } from './style';

const Backdrop = (props) => {
  const { show } = props;

  return <>{show ? <Wrapper /> : null}</>;
};

Backdrop.propTypes = BackdropProps;

export default Backdrop;
