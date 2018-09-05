import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './styles/navigation.css';

export default class Navigation extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: null
  };

  getContent = () => {
    const {user} = this.props;
    return (
      <div className="Navigation-content">
        <Link to="/">
          <h3 className="Navigation-logo">airlyst</h3>
        </Link>
        <div className="Navigation-right-content">
          {_.isEmpty(user) ? (
            <Fragment>
              <Link to="/signup">
                <p className="Navigation-link">Signup</p>
              </Link>
              <Link to="/login">
                <p className="Navigation-link">Login</p>
              </Link>
            </Fragment>
          ) : (
            <Fragment>{this.props.user.firstName}</Fragment>
          )}
        </div>
      </div>
    );
  };

  render() {
    return <div className="Navigation">{this.getContent()}</div>;
  }
}
