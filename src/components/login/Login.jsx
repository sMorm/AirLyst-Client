import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import Input from '../reusables/Input';
import Button from '../reusables/Button';
import {LOGIN_MUTATION} from './queries/login';
import errorCodes from '../errorCodes';
import './styles/login.css'

const noop = () => {};

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e, login) => {
    e.preventDefault();
    const {username, password} = this.state;
    login({variables: {username, password}}).catch(noop);
  };
  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION}>
        {(login, {loading, error, data}) => {
          if (error) {
            console.log(error.graphQLErrors.find(f => f));
            const {code} = error.graphQLErrors.find(f => f).extensions;
            return <h1>{errorCodes[code]}</h1>;
          }
          if (data) {
            localStorage.setItem('jwt', data.login.token);
            return <Redirect to="/" />;
          }
          return (
            <div className="Login container">
              <form 
                onSubmit={e => this.onSubmit(e, login)}
                className="Login-form"
                >
                <Input
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                  placeholder="Username"
                />
                <Input
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  placeholder="Password"
                  type="password"
                />
                <Button onClick={e => this.onSubmit(e, login)} fullWidth>
                  {loading ? 'saving' : 'Login'}
                </Button>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
