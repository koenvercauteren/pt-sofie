import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import HeaderMenu from '../components/header-menu';
import Parallax from '../sections/parallax';
import Mission from '../sections/mission';
import Approach from '../sections/approach';
import Offer from '../sections/offer';
import Location from '../sections/location';
import Contact from '../sections/contact';

import styles from '../styles/pages/index.styles';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <HeaderMenu />
        <Parallax />
        <Mission />
        <Approach />
        <Offer />
        <Location />
        <Contact />
      </div>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
