import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import Burger from './burger';

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#252525 !important',
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

function HeaderMenu(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar id="header-menu" className={classes.header} position="fixed" color="primary">
        <Grid container justify="center">
          <Grid item xs={11} md={10} className={classes.grid}>
            <Toolbar disableGutters>
              <Typography variant="title" color="inherit">
                SDB
              </Typography>

              <div className={classes.buttonGroup}>
                <Hidden xsDown>
                  <Button color="inherit">Missie</Button>
                  <Button color="inherit">Aanpak</Button>
                  <Button color="inherit">Aanbod</Button>
                  <Button color="inherit">Locatie</Button>
                  <Button color="inherit">Contact</Button>
                </Hidden>

                <Hidden smUp>
                  <Burger
                    items={[
                      { name: 'Missie' },
                      { name: 'Aanpak' },
                      { name: 'Aanbod' },
                      { name: 'Locatie' },
                      { name: 'Contact' },
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
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);
