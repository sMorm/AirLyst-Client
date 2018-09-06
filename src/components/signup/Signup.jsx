import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Form from '../reusables/Form';
import Input from '../reusables/Input';
import Button from '../reusables/Button';

// Apollo & GraphQL
import {Mutation} from 'react-apollo';
import {SIGNUP_MUTATION} from './queries/signup';
import { Link } from 'react-router-dom';

const noop = () => {};

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
      password
    } = this.state;
    console.log(signup);
    console.log(this.state);
    signup({variables: {firstName, lastName, username, email, password}});
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION}>
        {(signup, {loading, error, data}) => {
          if (error) {
            console.log(error);
            console.log(error.graphQLErrors.find(f => f));
          }
          if (data) {
            return <p>Email Confirmation Sent</p>
          }
          return (
            <div className="container">
              <h1>Signup</h1>
              <hr />
              <Form isSmallVariation onSubmit={e => this.onSubmit(e, signup)}>
                <Input
                  isFullWidth
                  value={this.state.firstName}
                  onChange={this.onChange}
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  isFullWidth
                  value={this.state.lastName}
                  onChange={this.onChange}
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input
                  isFullWidth
                  value={this.state.username}
                  onChange={this.onChange}
                  name="username"
                  placeholder="Username"
                />
                <Input
                  isFullWidth
                  value={this.state.email}
                  onChange={this.onChange}
                  name="email"
                  placeholder="E-Mail"
                  type="email"
                />
                <Input
                  isFullWidth
                  value={this.state.password}
                  onChange={this.onChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Input
                  isFullWidth
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                />
                <Button
                  isInGutter
                  isFullWidth
                  onClick={loading ? noop : e => this.onSubmit(e, signup)}
                >
                  {loading ? 'Saving...' : 'Signup'}
                </Button>
                Already have an account? <Link to="/login">Log in.</Link>
              </Form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
