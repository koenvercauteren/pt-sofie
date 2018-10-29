import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/approach.styles';

const Approach = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.approachContainer}>
      <div className={classes.approachImage} />
      <ScrollableAnchor id="approach">
        <Grid item xs={11} md={10} className={classes.approachGridItem}>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <Typography gutterBottom variant="display2" color="inherit" className={classes.title}>
                <FormattedMessage id="approach_title" />
              </Typography>

              <Typography gutterBottom variant="subheading" color="inherit">
                <FormattedMessage id="approach_content_one" />
              </Typography>

              <Typography gutterBottom variant="subheading" color="inherit">
                <FormattedMessage id="approach_content_two" />
              </Typography>

              <Typography className={classes.footer} variant="subheading" color="inherit">
                <FormattedMessage id="approach_content_three" />
              </Typography>
            </div>
          </div>
        </Grid>
      </ScrollableAnchor>
    </Grid>
  );
};

Approach.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Approach));
