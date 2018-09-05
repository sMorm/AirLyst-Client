import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoggedInHome extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="container">
        Hello {this.props.user.firstName}
      </div>
    )
  }
}
