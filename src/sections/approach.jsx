import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import styles from './approach.styles';

const Approach = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.approachContainer}>
      <div className={classes.approachImage} />
      <Grid item xs={11} md={10} className={classes.approachGridItem}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <Typography gutterBottom variant="display1" color="inherit">
              Aanpak
            </Typography>

            <Typography gutterBottom variant="body1" color="inherit">
              Je weg vinden binnen een fitness is niet gemakkelijk. Voor je aan je gezonde levensstijl begint moet je
              jezelf enkele vragen stellen: Waarom doe ik dit en welke doelen wil ik behalen. Zodra jij de antwoorden
              weet kunnen we aan de slag met een voedingsschema en trainingsschema.
            </Typography>

            <Typography gutterBottom variant="body1" color="inherit">
              Samen kijken we op regelmatige basis welke veranderingen we kunnen doorvoeren om optimale resultaten te
              bereiken. Of je nu aan je zelfvertrouwen wil werken, wil afvallen of bijkomen, conditie wil verbeteren of
              spiermassa opbouwen, alles kan.
            </Typography>

            <Typography className={classes.footer} variant="body1" color="inherit">
              Why start tomorrow when you can start today?
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

Approach.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Approach);
