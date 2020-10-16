import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/who.styles';
import sofieImage from '../assets/img/sofie3.jpg';

const Who = ({ classes }) => (
  <Grid container justify="center" className={classes.container}>
    <Grid item xs={11} md={10} className={classes.sofie}>
      <ScrollableAnchor id="who">
        <Typography variant="display2" className={classes.title}>
          <FormattedMessage id="who_title" />
        </Typography>
      </ScrollableAnchor>

      <div className={classes.content}>
        <div>
          <Typography variant="body2">
            <FormattedMessage id="who_label_one" />
          </Typography>
          <Typography gutterBottom variant="body1">
            <FormattedMessage id="who_label_one_content_one" />
          </Typography>

          <Typography variant="body2">
            <FormattedMessage id="who_label_two" />
          </Typography>
          <Typography variant="body1">
            <FormattedMessage id="who_label_two_content_one" />
          </Typography>
          <Typography variant="body1">
            <FormattedMessage id="who_label_two_content_two" />
          </Typography>
          <Typography gutterBottom variant="body1">
            <FormattedMessage id="who_label_two_content_three" />
          </Typography>

          <Typography variant="body2">
            <FormattedMessage id="who_label_three" />
          </Typography>
          <Typography gutterBottom variant="body1">
            <FormattedMessage id="who_label_three_content_one" />
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

Who.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Who));
