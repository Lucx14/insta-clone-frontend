import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Header from './hoc/Layout/Header';
import Footer from './hoc/Layout/Footer';
import Test from './components/TestCard/Test';
import TestFeed from './components/TestCard/TestFeed';
import TestUser from './components/TestCard/TestUser';
import Auth from './containers/Auth';
import Signup from './containers/Signup';
import Logout from './containers/Logout';

import * as actions from './store/actions';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  width: 90%;
`;

const App = (props) => {
  const { isAuthenticated, onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/auth" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/feed" component={TestFeed} />
        <Route path="/profile" component={TestUser} />
        <Route path="/" exact component={Test} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{routes}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTryAutoSignup: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
