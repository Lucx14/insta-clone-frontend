import React from 'react';
import HeaderProps from './propTypes';
import { Wrapper, Content } from './style';
import NavigationItems from '../../Navigation/NavigationItems';

const Header = (props) => {
  const { isAuthenticated } = props;

  return (
    <Wrapper>
      <Content>
        <h1>Insta Clone</h1>
        <NavigationItems isAuthenticated={isAuthenticated} />
      </Content>
    </Wrapper>
  );
};

Header.propTypes = HeaderProps;

export default Header;
