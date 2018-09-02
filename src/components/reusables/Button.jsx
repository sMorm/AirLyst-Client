import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    style: {},
    name: '',
    className: '',
    placeholder: '',
    type: 'text'
  }

  render() {
    return (
      <button
        {...this.props}
      >
        {this.props.children}
      </button>
    )
  }
}
