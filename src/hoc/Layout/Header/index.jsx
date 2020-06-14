import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './style';
import NavigationItems from '../../../components/Navigation/NavigationItems';

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Header);
