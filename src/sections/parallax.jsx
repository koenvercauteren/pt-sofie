import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Parallax as ReactParallax } from 'react-parallax';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import backgroundImage from '../assets/img/background-image-landing-page.jpg';
import styles from './parallax.styles';

const fadeTitle = () => {
  const title = window.document.getElementById('title');
  if (title) title.style.opacity = 1 - window.scrollY / 250;
};

class Parallax extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', fadeTitle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', fadeTitle);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <ReactParallax
            className={classes.parallax}
            bgImage={backgroundImage}
            bgClassName={classes.background}
            strength={-50}
          >
            <div className={classes.titleContainer}>
              <Typography id="title" className={classes.title} variant="title">
                Een gezonde geest in<br />
                een gezond lichaam
              </Typography>
              <Button className={classes.button}>BEKIJK HET AANBOD</Button>
            </div>
          </ReactParallax>
        </Grid>
      </Grid>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Parallax);
