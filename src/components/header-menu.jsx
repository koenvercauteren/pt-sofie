import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { goToTop, goToAnchor } from 'react-scrollable-anchor';

import ANCHORS from '../globals/anchors';

import Burger from './burger';

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#252525 !important',
    color: '#fff',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  grid: {
    maxWidth: '1040px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
};

const HeaderMenu = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar id="header-menu" className={classes.header} position="fixed" color="primary">
        <Grid container justify="center">
          <Grid item xs={11} md={10} className={classes.grid}>
            <Toolbar disableGutters>
              <Button color="inherit" onClick={() => goToTop()}>
                <Typography variant="title" color="inherit">
                  SDB
                </Typography>
              </Button>

              <div className={classes.buttonGroup}>
                <Hidden xsDown>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.MISSION)}>
                    Missie
                  </Button>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.APPROACH)}>
                    Aanpak
                  </Button>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.OFFER)}>
                    Aanbod
                  </Button>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.LOCATION)}>
                    Locatie
                  </Button>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.CONTACT)}>
                    Contact
                  </Button>
                </Hidden>

                <Hidden smUp>
                  <Burger
                    items={[
                      { name: 'Missie', anchor: ANCHORS.MISSION },
                      { name: 'Aanpak', anchor: ANCHORS.APPROACH },
                      { name: 'Aanbod', anchor: ANCHORS.OFFER },
                      { name: 'Locatie', anchor: ANCHORS.LOCATION },
                      { name: 'Contact', anchor: ANCHORS.CONTACT },
                    ]}
                  />
                </Hidden>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);
