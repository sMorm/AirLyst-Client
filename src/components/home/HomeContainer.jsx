import React, {Component} from 'react';
import Authentication from '../../authContext';
import GuestHome from './GuestHome';
import LoggedInHome from './LoggedInHome';

class HomeContainer extends Component {
  render() {
    return (
      <Authentication.Consumer>
        {({user}) => (user ? <LoggedInHome user={user} /> : <GuestHome />)}
      </Authentication.Consumer>
    );
  }
}

export default HomeContainer;
