import React from 'react';
import HeaderProps from './propTypes';
import { Wrapper, Content, TitleWrapper } from './style';
import NavigationItems from '../../Navigation/NavigationItems';

const Header = (props) => {
  const { isAuthenticated, username } = props;

  return (
    <Wrapper>
      <Content>
        <TitleWrapper>Insta Clone</TitleWrapper>
        <NavigationItems
          isAuthenticated={isAuthenticated}
          authenticatedUser={username}
        />
      </Content>
    </Wrapper>
  );
};

Header.propTypes = HeaderProps;

export default Header;
