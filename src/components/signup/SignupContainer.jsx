import React, {Component} from 'react';
import Authentication from '../../authContext';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import Signup from './Signup';

export default class SignupContainer extends Component {
  render() {
    return (
      <Authentication.Consumer>
        {({user}) => (
          _.isEmpty(user) ? <Signup user={user} /> : <Redirect to="/" />
        )}
      </Authentication.Consumer>
    );
  }
}
