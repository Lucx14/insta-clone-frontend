import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

import styled from 'styled-components';
import Header from './hoc/Layout/Header';
import Footer from './hoc/Layout/Footer';

import Test from './components/TestCard/Test';
import TestFeed from './components/TestCard/TestFeed';
import TestUser from './components/TestCard/TestUser';

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

function App() {
  const routes = (
    <Switch>
      <Route path="/feed" component={TestFeed} />
      <Route path="/profile" component={TestUser} />
      <Route path="/" component={Test} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{routes}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default withRouter(App);
