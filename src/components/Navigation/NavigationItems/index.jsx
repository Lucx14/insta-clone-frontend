import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationItemsProps from './propTypes';

import NavigationItem from '../NavigationItem';
import { Wrapper } from './style';

const NavigationItems = (props) => {
  const { isAuthenticated, authenticatedUser } = props;
  const location = useLocation();

  return (
    <Wrapper>
      {isAuthenticated && (
        <>
          <NavigationItem link="/" exact={false}>
            Home
          </NavigationItem>
          <NavigationItem link="/search" exact={false}>
            Search
          </NavigationItem>
          <NavigationItem link={`/profile/${authenticatedUser}`} exact={false}>
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
