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
import LanguageIcon from '@material-ui/icons/Language';

import ANCHORS from '../globals/anchors';
import Logo from '../assets/img/Logo-white-website.png';
import InstagramLogo from '../assets/img/instagram-logo.png';
import i18n from '../i18n';

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
    '& button': {
      minWidth: 'auto',
    },
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
  languageIcon: {
    marginRight: 8
  }
});

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      window: undefined,
      location: undefined,
      localStorage: undefined,
    };
  }

  componentDidMount() {
    this.setState({ window, location, localStorage }); // eslint-disable-line no-restricted-globals
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;
    const { localStorage, location } = this.state;

    function languageClick () {
        const locale = localStorage.getItem('locale');
        localStorage.setItem('locale', i18n.languages.find(l => l !== locale) || i18n.DEFAULT_LOCALE);
        location.reload();
    }

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
                  <Hidden smDown>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.KEYSTOSUCCESS)}>
                      <FormattedMessage id="menu_keys" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.APPROACH)}>
                      <FormattedMessage id="menu_approach" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.OFFER)}>
                      <FormattedMessage id="menu_offer" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.BOOTCAMP)}>
                      <FormattedMessage id="menu_bootcamp" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.WHO)}>
                      <FormattedMessage id="menu_who" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.REVIEWS)}>
                      <FormattedMessage id="menu_reviews" />
                    </Button>
                    <Button color="inherit" onClick={() => goToAnchor(ANCHORS.LOCATION)}>
                      <FormattedMessage id="menu_location" />
                    </Button>
                    <Button
                      color="inherit"
                      onClick={languageClick}
                    >
                      <LanguageIcon className={classes.languageIcon} />
                      <FormattedMessage id="switch_language" />
                    </Button>
                    {/* <Button color="inherit" onClick={() => goToAnchor(ANCHORS.CONTACT)}>
                      <FormattedMessage id="menu_contact" />
                    </Button> */}
                  </Hidden>

                  <div className={classes.instagramWrapper}>
                    <img // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                      src={InstagramLogo}
                      alt="instagram-link"
                      className={classes.instagram}
                      onClick={() => {
                        this.state.window.open('https://www.instagram.com/fitfactory.pt/', '_blank');
                      }}
                    />
                  </div>

                  <Hidden mdUp>
                    <Burger
                      items={[
                        { name: formatMessage({ id: 'menu_keys' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.KEYSTOSUCCESS)},
                        { name: formatMessage({ id: 'menu_approach' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.APPROACH) },
                        { name: formatMessage({ id: 'menu_offer' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.OFFER) },
                        { name: formatMessage({ id: 'menu_bootcamp' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.BOOTCAMP)},
                        { name: formatMessage({ id: 'menu_who' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.WHO) },
                        { name: formatMessage({ id: 'menu_reviews' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.REVIEWS) },
                        { name: formatMessage({ id: 'menu_location' }).toUpperCase(), onClick: () => goToAnchor(ANCHORS.LOCATION) },
                        {
                            name: formatMessage({ id: 'switch_language' }).toUpperCase(),
                            onClick: languageClick
                        }
                        // { name: formatMessage({ id: 'menu_contact' }).toUpperCase(), anchor: ANCHORS.CONTACT },
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
