import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { goToAnchor } from 'react-scrollable-anchor';
import ArrowDownardIcon from '@material-ui/icons/ArrowDownward';
import { FormattedMessage, injectIntl } from 'react-intl';

import ANCHORS from '../globals/anchors';
import styles from '../styles/sections/parallax.styles';
import Button from '../components/button';

class Parallax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      window: undefined,
    };
  }

  componentDidMount() {
    this.setState({ window }, () => {
      this.state.window.addEventListener('scroll', this.fadeTitle);
    });
  }

  componentWillUnmount() {
    this.state.window.removeEventListener('scroll', this.fadeTitle);
  }

  fadeTitle() {
    const title = this.state.window.document.getElementById('title');
    if (title && this.state.window.scrollY < 270) title.style.opacity = 1 - this.state.window.scrollY / 250;
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.parallaxContainer}>
            <div className={classes.parallax} />
          </div>
          <div className={classes.titleContainer}>
            <Typography id="title" className={classes.title} variant="title">
              <FormattedMessage id="parallax_title_one" />
              <br />
              <FormattedMessage id="parallax_title_two" />
            </Typography>
            <Button
              onClick={() => goToAnchor(ANCHORS.OFFER)}
              className={classes.button}
              text={formatMessage({ id: 'parallax_button' })}
            >
              <ArrowDownardIcon className={classes.leftIcon} />
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Parallax));
