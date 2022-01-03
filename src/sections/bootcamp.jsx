import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/bootcamp.styles';
import Button from '../components/button';
import ANCHORS from '../globals/anchors';

const Bootcamp = props => {
  const {
    classes,
    intl: { formatMessage },
  } = props;

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

              <Typography className={classes.pricing} gutterBottom variant="subheading" color="inherit">
                <span dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'bootcamp_content_two' }) }} />
                <br />
                <span dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'bootcamp_content_three' }) }} />
              </Typography>

              <Typography gutterBottom variant="subheading" color="inherit" />

              <Typography variant="subheading" color="inherit">
                <FormattedMessage id="bootcamp_content_four" />
              </Typography>

              <Button
                className={classes.button}
                text={formatMessage({ id: 'bootcamp_button' })}
                onClick={() => goToAnchor(ANCHORS.LOCATION)}
              >
                <AssignmentTurnedInIcon className={classes.leftIcon} />
              </Button>
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
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Bootcamp));
