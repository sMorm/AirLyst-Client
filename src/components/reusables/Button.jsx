import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/button.css';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isFullWidth: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    isInGutter: PropTypes.bool
  };

  static defaultProps = {
    isFullWidth: false,
    name: null,
    className: '',
    placeholder: null,
    type: null,
    isInGutter: false
  };

  getContainerClass = () => (this.props.isFullWidth ? 'fullWidth' : '');

  getElementProps = () => {
    const {isFullWidth, className, ...allProps} = this.props;
    return allProps;
  };
  render() {
    return (
      <div className={this.getContainerClass()}>
        <button
          {...this.getElementProps()}
          className={cx('Button-reusable',{
            'Button-reusable--full': this.props.isFullWidth,
            'Button-reusable--gutter': this.props.isInGutter,
          })}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
