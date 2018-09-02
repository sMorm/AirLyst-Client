import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Input from '../reusables/Input';
import Button from '../reusables/Button';

// Apollo & GraphQL
import {Mutation} from 'react-apollo';
import {SIGNUP_MUTATION} from './queries/signup';

export default class Signup extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: null
  };

  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e, signup) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    } = this.state;
    console.log(signup);
    console.log(this.state);
    signup({variables: {firstName, lastName, username, email, password}});
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION}>
        {(signup, {loading, error, data}) => {
          if(error) {
            console.log(error.graphQLErrors.find(f => f));
          }
          return (
          <form onSubmit={e => this.onSubmit(e, signup)}>
            <Input
              value={this.state.firstName}
              onChange={this.onChange}
              name="firstName"
              placeholder="First Name"
            />
            <Input
              value={this.state.lastName}
              onChange={this.onChange}
              name="lastName"
              placeholder="Last Name"
            />
            <Input
              value={this.state.username}
              onChange={this.onChange}
              name="username"
              placeholder="Username"
            />
            <Input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              placeholder="E-Mail"
              type="email"
            />
            <Input
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              placeholder="Password"
              type="password"
            />
            <Input
              value={this.state.confirmPassword}
              onChange={this.onChange}
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
            <Button onClick={e => this.onSubmit(e, signup)}>
              {loading ? 'Saving...' : 'Signup'}
            </Button>
          </form>
        )}}
      </Mutation>
    );
  }
}
