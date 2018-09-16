import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

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
    const { classes } = this.props;
    console.log(this.state.window && this.state.window.location);
    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.location}>
          <ScrollableAnchor id="location">
            <Typography variant="display2" className={classes.title}>
              Locatie
            </Typography>
          </ScrollableAnchor>

          <Typography gutterBottom variant="subheading" className={classes.body}>
            Alle binnensessies zullen doorgaan in Basic-Fit Oudaan in Antwerpen. Je zal hiervoor natuurlijk een
            abonnement bij Basic-Fit moeten hebben. Moest dit nog niet het geval zijn kan je door op de onderstaande
            knop te klikken je inschrijven.
          </Typography>

          <Button
            className={classes.button}
            text="SCHRIJF JE IN"
            onClick={() => {
              this.state.window.open('https://www.basic-fit.com/nl-be/fitnessclubs/antwerpen-oudaan', '_blank');
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);
