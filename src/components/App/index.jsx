import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Wrapper, ContentWrapper } from './style';
import AppProps from './propTypes';

import Header from '../../containers/Header';
import Footer from '../Layout/Footer';
import Test from '../TestCard/Test';
import Feed from '../Feed';
import TestUser from '../TestCard/TestUser';
import Auth from '../../containers/Auth';
import Signup from '../../containers/Signup';
import Logout from '../../containers/Logout';

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
        <Route path="/search" component={Test} />
        <Route path="/profile/:username" component={TestUser} />
        <Route path="/" exact component={Feed} />
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

App.propTypes = AppProps;

export default App;
