import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import HeaderMenu from '../components/header-menu';
import backgroundImage from '../assets/img/background-image-landing-page.jpg';
import { Typography } from '../../node_modules/@material-ui/core';

const styles = {
  title: {
    paddingTop: '200px',
    color: '#fff',
    fontWeight: 300,
    fontSize: '50px',
    textAlign: 'center',
  },
  approach: {
    backgroundColor: 'transparent',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '1000px',
      transform: 'skewY(-8deg)',
      background: '#fff',
    },
  },
  background: {
    minHeight: '1100px',
    width: '100% !important',
    height: 'auto !important',
    objectFit: 'cover',
  },
  parallax: {
    overflow: 'visible !important',
  },
};

const IndexPage = props => {
  const { classes } = props;

  return (
    <div>
      <HeaderMenu />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Parallax
            className={classes.parallax}
            bgImage={backgroundImage}
            bgClassName={classes.background}
            strength={-100}
          >
            <div style={{ height: 690 }}>
              <ScrollAnimation animateOut="fadeOut" duration=".5" initiallyVisible>
                <Typography className={classes.title} variant="title">
                  Mijn missie is het promoten <br />
                  van een gezonde levensstijl
                </Typography>
              </ScrollAnimation>
            </div>
          </Parallax>
        </Grid>
        <Grid item xs={11} md={10}>
          <section className={classes.approach} />
        </Grid>
      </Grid>
    </div>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
