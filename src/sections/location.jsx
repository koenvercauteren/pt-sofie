import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/location.styles';
import Button from '../components/button';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      window: undefined,
    };
  }

  componentDidMount() {
    this.setState({ window });
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.location}>
          <ScrollableAnchor id="location">
            <Typography variant="display2" className={classes.title}>
              <FormattedMessage id="location_title" />
            </Typography>
          </ScrollableAnchor>

          <Typography gutterBottom variant="subheading" className={classes.body}>
            <FormattedMessage id="location_content" />
          </Typography>

          <Button
            className={classes.button}
            text={formatMessage({ id: 'location_button' })}
            onClick={() => {
              this.state.window.open('https://www.basic-fit.com/nl-be/subscription/membership', '_blank');
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Location));
