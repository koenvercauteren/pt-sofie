import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/bootcamp.styles';

const Bootcamp = props => {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.bootcampContainer}>
      <ScrollableAnchor id="bootcamp">
        <Grid item xs={11} md={10} className={classes.bootcampGridItem}>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <Typography gutterBottom variant="display2" color="inherit" className={classes.title}>
                <FormattedMessage id="bootcamp_title" />
              </Typography>

              <Typography gutterBottom variant="subheading" color="inherit">
                <FormattedMessage id="bootcamp_content_one" />
              </Typography>

              <Typography gutterBottom variant="subheading" color="inherit">
                <FormattedMessage id="bootcamp_content_two" />
              </Typography>

              <Typography className={classes.footer} variant="subheading" color="inherit">
                <FormattedMessage id="bootcamp_content_three" />
              </Typography>
            </div>
          </div>
        </Grid>
      </ScrollableAnchor>
      <div className={classes.bootcampImage} />
    </Grid>
  );
};

Bootcamp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Bootcamp));
