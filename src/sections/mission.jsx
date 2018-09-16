import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

import missionImage from '../assets/img/girl-stretching.jpeg';
import missionImage2 from '../assets/img/guy-running-city.jpg';
import missionImage3 from '../assets/img/guy-running-track.jpg';
import missionImage4 from '../assets/img/girl-preparing-food.jpg';

import styles from '../styles/sections/mission.styles';

const Mission = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={10} className={classes.mission}>
        <ScrollableAnchor id="mission">
          <Typography variant="display2" className={classes.title}>
            Sleutels tot succes
          </Typography>
        </ScrollableAnchor>

        <Grid container justify="space-between">
          <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={missionImage} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Levensstijl
                </Typography>
                <Typography variant="subheading">
                  Als personal trainer ben ik er voor jou om samen te werken aan een gezonde geest in een gezond lichaam
                  of je nu 16 of 116 bent.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={missionImage2} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Begeleiding
                </Typography>
                <Typography variant="subheading">
                  Ben je reeds vertrouwd met trainen of weet je niet hoe je moet beginnen? Er is begeleiding voor
                  beginners én gevorderden.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={missionImage3} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Planning
                </Typography>
                <Typography variant="subheading">
                  Door op maat gemaakte schema’s zorgen we ervoor dat je op een efficiënte en doeltreffende manier jouw
                  resultaten behaalt.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={missionImage4} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  Toewijding
                </Typography>
                <Typography variant="subheading">
                  Alles hangt af van jouw motivatie en toewijding, maar dankzij persoonlijke begeleiding sta je er
                  allesbehalve alleen voor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Mission.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mission);
