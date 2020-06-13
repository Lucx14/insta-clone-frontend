import React from 'react';
import { Wrapper, Content } from './style';
import NavigationItems from '../../../components/Navigation/NavigationItems';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Insta Clone</h1>
        <NavigationItems />
      </Content>
    </Wrapper>
  );
};

export default Header;
