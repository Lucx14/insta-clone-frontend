import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import LogoutProps from './propTypes';

const Logout = (props) => {
  const { onLogout } = props;

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/auth" />;
};

Logout.propTypes = LogoutProps;

export default Logout;
