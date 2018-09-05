import React, {Component, Fragment} from 'react';
import Authentication from './authContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import jwt from 'jsonwebtoken';
import client from './shared/utils/apollo';

import Navigation from './components/navigation/NavigationContainer';
import HomeContainer from './components/home/HomeContainer';
import SignupContainer from './components/signup/SignupContainer';
import EmailConfirmation from './components/signup/EmailConfirmation';
import LoginContainer from './components/login/LoginContainer';

const authValue = localStorage.jwt
  ? jwt.decode(localStorage.jwt)
  : {};

class Routes extends Component {
  render() {
    return (
      <Authentication.Provider value={authValue}>
        <ApolloProvider client={client}>
          <Fragment>
            <BrowserRouter>
            <Fragment>
            <Navigation user={authValue}/>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/signup" component={SignupContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/confirm/:token" component={EmailConfirmation} />
                <Route path="/*" component={() => <div>404</div>} />
              </Switch>
              </Fragment>
            </BrowserRouter>
          </Fragment>
        </ApolloProvider>
      </Authentication.Provider>
    );
  }
}

export default Routes;
