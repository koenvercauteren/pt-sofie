import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/location.styles';

const Location = ({ classes }) => (
    <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.location}>
            <ScrollableAnchor id="location">
                <Typography variant="display2" className={classes.title}>
                    <FormattedMessage id="location_title" />
                </Typography>
            </ScrollableAnchor>
      <div className={classes.bodyContainer}>
      <Typography gutterBottom variant="subheading" className={classes.body}>
                <b><FormattedMessage id="location_content_one" /></b>
                <FormattedMessage id="location_content_two" />
                <FormattedMessage id="location_content_three" />
            </Typography>
            <Typography gutterBottom variant="subheading" className={classes.body}>
                <b><FormattedMessage id="location_content_four" /></b>
                <FormattedMessage id="location_content_five" />
                <FormattedMessage id="location_content_six" />
            </Typography>
      </div>
        </Grid>
    </Grid>
);

Location.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(Location));
