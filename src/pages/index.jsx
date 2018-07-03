import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import backgroundImage from '../assets/img/background-image-landing-page.jpg';

const styles = {
  main: {
    width: '100%',
    height: '876px',
    paddingTop: '80px',
  },
  background: {
    minWidth: '1024px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
  },
};

const IndexPage = props => {
  const { classes } = props;
  return (
    <div>
      <Header />
      <picture>
        <img className={classes.background} src={backgroundImage} alt="background" />
      </picture>
      <Grid container justify="center">
        <Grid item xs={10}>
          <div className={classes.main} />
        </Grid>
      </Grid>
    </div>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
