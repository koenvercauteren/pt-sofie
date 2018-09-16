import React from 'react';
import PropTypes from 'prop-types';

import { Button as BaseButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #48B6BF 30%, #4880E2 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    margin: '20px auto 0 auto',
  },
};

const Button = ({ classes, text, className, onClick }) => (
  <BaseButton className={`${classes.button} ${className}`} onClick={onClick}>
    {text}
  </BaseButton>
);

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: undefined,
};

export default withStyles(styles)(Button);