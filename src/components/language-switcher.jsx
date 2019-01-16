import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { withStyles } from '@material-ui/core/styles';

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
    };
  }

  componentDidMount() {
    this.setState({ location }); // eslint-disable-line no-restricted-globals
  }

  switchLanguage() {
    const locale = localStorage.getItem('locale');
    localStorage.setItem('locale', i18n.languages.find(l => l !== locale));
    this.state.location.reload();
  }

  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="fab"
        className={classes.switcher}
        onClick={() => {
          this.switchLanguage();
        }}
      >
        <LanguageIcon />
      </Button>
    );
  }
}

LanguageSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguageSwitcher);
