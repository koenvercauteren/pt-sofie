import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import HeaderMenu from '../components/header-menu';
import Parallax from '../sections/parallax';
import Mission from '../sections/mission';
import Approach from '../sections/approach';

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

        {/* <iframe
          className={classes.location}
          title="location"
          width="600"
          height="450"
          frameBorder="0"
          src={'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJlYenpvD2w0cRRzw256FqexY&key=1675606539207665'}
          allowFullScreen
        /> */}
      </div>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
