import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/form.css';

const Form = props => 
  <form className={cx('Form',{
    'Form--gutter': props.hasGutter,
    'Form--mini': props.isSmallVariation && props.hasGutter,
    'Form--mini-noGutter': props.isSmallVariation && !props.hasGutter
  })} {...props} onSubmit={props.onSubmit}>
    {props.children}
  </form>

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  hasGutter: PropTypes.bool,
  isSmallVariation: PropTypes.bool
};

Form.defaultProps = {
  hasGutter: true,
  isSmallVariation: false
};

export default Form;