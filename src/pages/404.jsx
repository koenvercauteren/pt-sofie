import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Button from '../components/button';

const styles = () => ({
  container: {
    position: 'relative',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '750px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fafafa',
      zIndex: -1,
    },
  },
  notFound: {
    marginTop: '150px',
    maxWidth: '1040px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    width: 300,
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
    marginBottom: '30px',
  },
  text: {
    marginBottom: '10px',
  },
});

const LinkToHome = props => <Link to="/" {...props} />;

const NotFoundPage = props => {
  const { classes } = props;
  let textJsx;
  if (isWidthDown('md', props.width)) {
    textJsx = (
      <Typography variant="display2" className={classes.text}>
        Pagina niet gevonden.
      </Typography>
    );
  } else if (isWidthDown('sm', props.width)) {
    textJsx = (
      <Typography variant="title" className={classes.text}>
        Pagina niet gevonden.
      </Typography>
    );
  } else {
    textJsx = (
      <Typography variant="display3" className={classes.text}>
        Pagina niet gevonden.
      </Typography>
    );
  }

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={11} md={10} className={classes.notFound}>
        {textJsx}
        <Button className={classes.button} text="GA TERUG" component={LinkToHome} />
      </Grid>
    </Grid>
  );
};

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

export default withWidth()(withStyles(styles)(NotFoundPage));
