import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import styles from '../styles/sections/location.styles';
import Button from '../components/button';

const Location = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={11} md={10} className={classes.location}>
        <Typography variant="display2" className={classes.title}>
          Locatie
        </Typography>

        <Typography gutterBottom variant="subheading" className={classes.body}>
          Alle binnensessies zullen doorgaan in Basic-Fit Oudaan in Antwerpen. Je zal hiervoor natuurlijk een abonnement
          bij Basic-Fit moeten hebben. Moest dit nog niet het geval zijn kan je door op de onderstaande knop te klikken
          je inschrijven.
        </Typography>

        <Button className={classes.button} text="SCHRIJF JE IN" />
      </Grid>
    </Grid>
  );
};

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);
