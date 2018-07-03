import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    // backgroundColor: 'transparent',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="fixed" color="secondary">
        <Grid container justify="center">
          <Grid item xs={10}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                SDB
              </Typography>
              <div className={classes.buttonGroup}>
                <Button color="inherit">Visie</Button>
                <Button color="inherit">Aanpak</Button>
                <Button color="inherit">Aanbod</Button>
                <Button color="inherit">Contact</Button>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
