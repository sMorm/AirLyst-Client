import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
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
      <input
        {...this.props}
        onChange={e => this.props.onChange(e)}
      >
        {this.props.children}
      </input>
    )
  }
}
