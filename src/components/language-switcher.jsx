import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { injectIntl } from 'react-intl';

import i18n from '../i18n';

const styles = {
  switcher: {
    position: 'fixed',
    zIndex: 1,
    bottom: 32,
    right: 32,
    background: 'linear-gradient(45deg, #48B6BF 30%, #4880E2 90%)',
    color: 'white !important',
  },
};

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
      localStorage: undefined,
    };
  }

  componentDidMount() {
    this.setState({ location, localStorage }); // eslint-disable-line no-restricted-globals
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;
    return (
      <Tooltip title={formatMessage({ id: 'switch_language' })}>
        <Button
          variant="fab"
          className={classes.switcher}
          onClick={() => {
            const { localStorage, location } = this.state;
            const locale = localStorage.getItem('locale');
            localStorage.setItem('locale', i18n.languages.find(l => l !== locale) || i18n.DEFAULT_LOCALE);
            location.reload();
          }}
        >
          <LanguageIcon />
        </Button>
      </Tooltip>
    );
  }
}

LanguageSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(LanguageSwitcher));
