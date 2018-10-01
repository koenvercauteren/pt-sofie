import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import styles from '../styles/pages/index.styles';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.page} />;
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
