import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '../reusables/Button';
import {Redirect} from 'react-router-dom';
import {Mutation} from 'react-apollo';
import {CONFIRM_MUTATION} from './queries/signup';
import jwt from 'jsonwebtoken';

class EmailConfirmation extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    token: this.context.router.route.match.params.token,
    invalidToken: false
  }

  componentDidMount() {
    const token = jwt.decode(this.state.token);
    if (!token) {
      this.setState({invalidToken: true});
    }
  }

  onSubmit = (e, confirm) => {
    const {token} = this.state;
    confirm({variables: {token}});
  }

  render() {
    if (this.state.invalidToken) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <h1>Your account is almost ready —</h1>
        <Mutation mutation={CONFIRM_MUTATION}>
          {(confirm, {loading, error, data}) => {
            if(data) {
              return <Redirect to="/login"/> 
            }
            return (
              <Button onClick={e => this.onSubmit(e, confirm)}>
                {loading ? 'Confirming' : 'Confirm'}
              </Button>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default EmailConfirmation;