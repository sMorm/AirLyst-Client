import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/input.css';

const Input = props => 
  <input className={cx('Input',{
    'Input--fullWidth': props.isFullWidth,
    'Input--halfWidth': props.isHalfWidth,
    'Input--oneFourthWidth': props.isOneFourthWidth,
    'Input--gutter': props.hasGutter
  })} {...props} onChange={e => props.onChange(e)}>
    {props.children}
  </input>

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isHalfWidth: PropTypes.bool,
  isOneFourthWidth: PropTypes.bool,
  hasGutter: PropTypes.bool
};

Input.defaultProps = {
  style: {},
  name: '',
  placeholder: '',
  type: 'text',
  isFullWidth: false,
  isHalfWidth: false,
  isOneFourthWidth: true,
  hasGutter: true
};

export default Input;