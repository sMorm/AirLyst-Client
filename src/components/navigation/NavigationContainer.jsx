import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Navigation from './Navigation';

export default class NavigationContainer extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  static defaultProps = {
    user: {}
  }

  render() {
    return (
      <Navigation user={this.props.user}/>
    );
  }
}
