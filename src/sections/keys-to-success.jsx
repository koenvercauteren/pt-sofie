import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

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
            <FormattedMessage id="keys_to_success_title" />
          </Typography>
        </ScrollableAnchor>

        <Grid container justify="space-between">
          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  <FormattedMessage id="key_one_title" />
                </Typography>
                <Typography variant="subheading">
                  <FormattedMessage id="key_one_content" />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage2} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  <FormattedMessage id="key_two_title" />
                </Typography>
                <Typography variant="subheading">
                  <FormattedMessage id="key_two_content" />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage3} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  <FormattedMessage id="key_three_title" />
                </Typography>
                <Typography variant="subheading">
                  <FormattedMessage id="key_three_content" />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.gridItem} item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={keysToSuccessImage4} title="Girl Stretching" />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline">
                  <FormattedMessage id="key_four_title" />
                </Typography>
                <Typography variant="subheading">
                  <FormattedMessage id="key_four_content" />
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

export default injectIntl(withStyles(styles)(KeysToSuccess));
