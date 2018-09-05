import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles/reusables.css';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    fullWidth: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    fullWidth: false,
    name: null,
    className: '',
    placeholder: null,
    type: null
  };

  getContainerClass = () => (this.props.fullWidth ? 'fullWidth' : '');

  getElementProps = () => {
    const {fullWidth, className, ...allProps} = this.props;
    return allProps;
  };
  render() {
    return (
      <div className={this.getContainerClass()}>
        <button
          {...this.getElementProps()}
          className={
            this.props.fullWidth
              ? 'Button-reusable Button-reusable-full'
              : 'Button-reusable'
          }
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
