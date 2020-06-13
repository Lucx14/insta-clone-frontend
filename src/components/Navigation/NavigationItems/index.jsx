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
    </Wrapper>
  );
};

export default NavigationItems;
