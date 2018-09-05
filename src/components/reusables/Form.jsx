import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/form.css';

const Form = props => 
  <form className={cx('Form',{
    'Form--gutter': props.hasGutter
  })} {...props} onChange={e => props.onChange(e)}>
    {props.children}
  </form>

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  hasGutter: PropTypes.bool
};

Form.defaultProps = {
  hasGutter: true
};

export default Form;