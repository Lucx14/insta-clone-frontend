import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItemProps from './propTypes';
import { Wrapper } from './style';

const NavigationItem = (props) => {
  const { link, exact, children } = props;
  return (
    <Wrapper>
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </Wrapper>
  );
};

NavigationItem.propTypes = NavigationItemProps;

export default NavigationItem;
