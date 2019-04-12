import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { goToTop, goToAnchor } from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

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
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar id="header-menu" className={classes.header} position="fixed" color="primary">
          <Grid container justify="center">
            <Grid item xs={11} md={10} className={classes.grid}>
              <Toolbar disableGutters>
                <Button color="inherit" onClick={() => goToTop()}>
                  <img src={Logo} alt="logo-sdb" />
                </Button>

                <div className={classes.buttonGroup}>
                  <Hidden xsDown>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.KEYSTOSUCCESS)}>
                      <FormattedMessage id="menu_keys" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.APPROACH)}>
                      <FormattedMessage id="menu_approach" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.OFFER)}>
                      <FormattedMessage id="menu_offer" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.WHO)}>
                      <FormattedMessage id="menu_who" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.LOCATION)}>
                      <FormattedMessage id="menu_location" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.CONTACT)}>
                      <FormattedMessage id="menu_contact" />
                    </Button>
                  </Hidden>

                  <div className={classes.instagramWrapper}>
                    <img // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                      src={InstagramLogo}
                      alt="instagram-link"
                      className={classes.instagram}
                      onClick={() => {
                        this.state.window.open('https://www.instagram.com/sofiedebacker.pt/', '_blank');
                      }}
                    />
                  </div>

                  <Hidden smUp>
                    <Burger
                      items={[
                        { name: formatMessage({ id: 'menu_keys' }).toUpperCase(), anchor: ANCHORS.KEYSTOSUCCESS },
                        { name: formatMessage({ id: 'menu_approach' }).toUpperCase(), anchor: ANCHORS.APPROACH },
                        { name: formatMessage({ id: 'menu_offer' }).toUpperCase(), anchor: ANCHORS.OFFER },
                        { name: formatMessage({ id: 'menu_who' }).toUpperCase(), anchor: ANCHORS.WHO },
                        { name: formatMessage({ id: 'menu_location' }).toUpperCase(), anchor: ANCHORS.LOCATION },
                        { name: formatMessage({ id: 'menu_contact' }).toUpperCase(), anchor: ANCHORS.CONTACT },
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
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(HeaderMenu));
