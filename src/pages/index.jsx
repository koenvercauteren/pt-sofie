import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import HeaderMenu from '../components/header-menu';
import Parallax from '../sections/parallax';
import KeysToSuccess from '../sections/keys-to-success';
import Approach from '../sections/approach';
import Bootcamp from '../sections/bootcamp';
import Offer from '../sections/offer';
import Who from '../sections/who';
import Location from '../sections/location';
// import Contact from '../sections/contact';
import Reviews from '../sections/reviews';

import styles from '../styles/pages/index.styles';
import SeoTags from '../components/seo-tags';
import LanguageSwitcher from '../components/language-switcher';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <SeoTags />
        <HeaderMenu />
        <Parallax />
        <KeysToSuccess />
        <Approach />
        <Offer />
        <Bootcamp />
        <Who />
        <Reviews />
        <Location />
        {/* <Contact /> */}
        <LanguageSwitcher />
      </div>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
