import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

const Approach = props => {
  const { classes } = props;
  console.log(classes);
  return <div />;
};

Approach.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Approach);
