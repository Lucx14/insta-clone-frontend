import React from 'react';
import NavigationItem from '../NavigationItem';
import { Wrapper } from './style';

const NavigationItems = () => {
  return (
    <Wrapper>
      <NavigationItem link="/feed" exact={false}>
        Feed
      </NavigationItem>
      <NavigationItem link="/" exact={false}>
        All
      </NavigationItem>
      <NavigationItem link="/profile" exact={false}>
        Profile
      </NavigationItem>
      <NavigationItem link="/profile" exact={false}>
        Logout
      </NavigationItem>
      <NavigationItem link="/auth" exact={false}>
        Auth
      </NavigationItem>
      <NavigationItem link="/signup" exact={false}>
        Sign up
      </NavigationItem>
    </Wrapper>
  );
};

export default NavigationItems;
