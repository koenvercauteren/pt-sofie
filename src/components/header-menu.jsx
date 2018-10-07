import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { goToTop, goToAnchor } from 'react-scrollable-anchor';

import ANCHORS from '../globals/anchors';
import Logo from '../assets/img/logo.png';

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
  logo: {
    width: '75px',
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
                <img className={classes.logo} src={Logo} alt="logo" />
              </Button>

              <div className={classes.buttonGroup}>
                <Hidden xsDown>
                  <Button color="inherit" onClick={() => goToAnchor(ANCHORS.KEYSTOSUCCESS)}>
                    Sleutels
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
                      { name: 'Sleutels', anchor: ANCHORS.KEYSTOSUCCESS },
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
