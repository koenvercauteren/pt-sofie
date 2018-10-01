import React from 'react';
import PropTypes from 'prop-types';

import { Button as BaseButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #48B6BF 30%, #4880E2 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white !important',
    margin: '20px auto 0 auto',
  },
};

const Button = ({ children, classes, text, className, onClick, type, disabled, component }) => (
  <BaseButton
    component={component}
    disabled={disabled}
    type={type}
    className={`${classes.button} ${className}`}
    onClick={onClick}
  >
    {children}
    {text}
  </BaseButton>
);

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.object,
  component: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  type: '',
  children: undefined,
  component: undefined,
  disabled: false,
  onClick: undefined,
};

export default withStyles(styles)(Button);
