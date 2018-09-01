import React, { Component } from "react";
import Authentication from "./authContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import jwt from "jsonwebtoken";
import client from "./shared/utils/apollo";

import HomeContainer from "./components/home/HomeContainer";

const authValue = localStorage.jwt
  ? jwt.decode(localStorage.jwt)
  : { authenticated: false };

class Routes extends Component {
  render() {
    return (
      <Authentication.Provider value={authValue}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/*" component={() => <div>404</div>} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </Authentication.Provider>
    );
  }
}

export default Routes;
