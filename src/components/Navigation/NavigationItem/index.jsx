import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
