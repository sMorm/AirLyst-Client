import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Login from './Login';
import Auth from '../../authContext';

export default class LoginContainer extends Component {
  render() {
    return (
      <Auth.Consumer>
        {({user}) => (
          user ? <Redirect to="/" /> : <Login />
        )}
      </Auth.Consumer>
    );
  }
}
