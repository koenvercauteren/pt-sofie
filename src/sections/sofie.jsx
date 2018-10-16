import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

import styles from '../styles/sections/sofie.styles';
import sofieImage from '../assets/img/sofie.jpg';

const Sofie = ({ classes }) => (
  <Grid container justify="center" className={classes.container}>
    <Grid item xs={11} md={10} className={classes.sofie}>
      <ScrollableAnchor id="sofie">
        <Typography variant="display2" className={classes.title}>
          Wie ben ik
        </Typography>
      </ScrollableAnchor>

      <div className={classes.content}>
        <div>
          <Typography variant="body2">NAAM</Typography>
          <Typography gutterBottom variant="body1">
            Sofie de Backer
          </Typography>

          <Typography variant="body2">INTERESSES</Typography>
          <Typography variant="body1">Reizen</Typography>
          <Typography variant="body1">Voeding</Typography>
          <Typography gutterBottom variant="body1">
            Gezondheid
          </Typography>

          <Typography variant="body2">LEEFTIJD</Typography>
          <Typography gutterBottom variant="body1">
            26
          </Typography>
        </div>

        <div className={classes.imageContainer}>
          <img className={classes.image} src={sofieImage} alt="personal-trainer-sofie" />
          <div className={classes.nasm} />
        </div>
      </div>
    </Grid>
  </Grid>
);

Sofie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sofie);
