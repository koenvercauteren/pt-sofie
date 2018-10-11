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
import InstagramLogo from '../assets/img/instagram-logo.png';

import Burger from './burger';

const styles = theme => ({
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
  instagram: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginRight: '32px',
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: '32px',
    },
  },
  instagramWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class HeaderMenu extends React.Component {
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

                  <div className={classes.instagramWrapper}>
                    <img // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                      src={InstagramLogo}
                      alt="instagram-link"
                      className={classes.instagram}
                      onClick={() => {
                        this.state.window.open('https://www.instagram.com/debacker.sofie/', '_blank');
                      }}
                    />
                  </div>

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
  }
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);
