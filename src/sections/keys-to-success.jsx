import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

import keysToSuccessImage from '../assets/img/girl-stretching.jpeg';
import keysToSuccessImage2 from '../assets/img/guy-running-city.jpg';
import keysToSuccessImage3 from '../assets/img/guy-running-track.jpg';
import keysToSuccessImage4 from '../assets/img/girl-preparing-food.jpg';

import styles from '../styles/sections/keys-to-success.styles';

const KeysToSuccess = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={10} className={classes.keysToSuccess}>
        <ScrollableAnchor id="keys-to-success">
          <Typography variant="display2" className={classes.title}>
            Sleutels tot succes
          </Typography>
        </ScrollableAnchor>

        <Grid container justify="space-between">
          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Levensstijl
                </Typography>
                <Typography variant="subheading">
                  Als personal trainer werken we samen aan een gezonde geest in een gezond lichaam. We kijken naar welke
                  kleine veranderingen je kan doorvoeren om je levensstijl te verbeteren.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage2} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Begeleiding
                </Typography>
                <Typography variant="subheading">
                  Ben je reeds vertrouwd met trainen en/of weet je niet hoe je moet beginnen? Er is professionele
                  begeleiding voor beginners en gevorderden. Samen werken we aan je conditie en beach body.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage3} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Planning
                </Typography>
                <Typography variant="subheading">
                  Door op maat gemaakte schema’s zorgen we ervoor dat je op een efficiënte en doeltreffende manier je
                  resultaten behaalt. Op basis hiervan kunnen we het plan ook dynamisch aanpassen om zo je grenzen te
                  verleggen.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage4} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Toewijding
                </Typography>
                <Typography variant="subheading">
                  Alles hangt af van je motivatie en toewijding maar dankzij persoonlijke begeleiding en tussentijds
                  motiveren en telefonisch contact sta je er allesbehalve alleen voor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

KeysToSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeysToSuccess);
