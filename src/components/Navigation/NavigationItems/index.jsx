import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationItemsProps from './propTypes';

import NavigationItem from '../NavigationItem';
import { Wrapper } from './style';

const NavigationItems = (props) => {
  const { isAuthenticated } = props;
  const location = useLocation();

  return (
    <Wrapper>
      {isAuthenticated && (
        <>
          <NavigationItem link="/" exact={false}>
            All
          </NavigationItem>
          <NavigationItem link="/feed" exact={false}>
            Feed
          </NavigationItem>
          <NavigationItem link="/profile" exact={false}>
            Profile
          </NavigationItem>
          <NavigationItem link="/logout" exact={false}>
            Logout
          </NavigationItem>
        </>
      )}
      {!isAuthenticated && location.pathname === '/signup' && (
        <NavigationItem link="/auth" exact={false}>
          Log in
        </NavigationItem>
      )}
      {!isAuthenticated && location.pathname === '/auth' && (
        <NavigationItem link="/signup" exact={false}>
          Sign up
        </NavigationItem>
      )}
    </Wrapper>
  );
};

NavigationItems.propTypes = NavigationItemsProps;

export default NavigationItems;
