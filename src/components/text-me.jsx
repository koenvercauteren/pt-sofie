import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import TextSmsIcon from '@material-ui/icons/Textsms';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { injectIntl } from 'react-intl';

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

class TextMe extends React.PureComponent {
  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;
    return (
      <Tooltip title={formatMessage({ id: 'text_me' })}>
        <Button
          variant="fab"
          className={classes.switcher}
          href="sms:+32456192499"
        >
          <TextSmsIcon />
        </Button>
      </Tooltip>
    );
  }
}

TextMe.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(TextMe));
