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
    // backgroundColor: '#9BFFF6',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
};

function Menu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="fixed" color="secondary">
        <Grid container justify="center">
          <Grid item xs={11} md={10}>
            <Toolbar disableGutters>
              <Typography variant="title" color="inherit">
                SDB
              </Typography>

              <div className={classes.buttonGroup}>
                <Hidden xsDown>
                  <Button color="inherit">Misie</Button>
                  <Button color="inherit">Aanpak</Button>
                  <Button color="inherit">Aanbod</Button>
                  <Button color="inherit">Contact</Button>
                </Hidden>

                <Hidden smUp>
                  <Burger items={[{ name: 'Misie' }, { name: 'Aanpak' }, { name: 'Aanbod' }, { name: 'Contact' }]} />
                </Hidden>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
