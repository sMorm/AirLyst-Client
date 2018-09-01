import React, {Component} from 'react';
import Authentication from '../../authContext';
import client from '../../shared/utils/apollo'
import gql from 'graphql-tag';

class HomeContainer extends Component {
  render() {
    return (
      <Authentication.Consumer>
        {({user}) => {
          if (user) {
            return <div>Hello {user.firstName}</div>
          } else {
            return <div>Not Logged In</div>
          }
        }}
      </Authentication.Consumer>
    );
  }
};

export default HomeContainer;