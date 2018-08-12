import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Zoom from 'react-reveal/Zoom';
// import Button from '@material-ui/core/Button';

import HeaderMenu from '../components/header-menu';
import Parallax from '../sections/parallax';
import Mission from '../sections/mission';
import Approach from '../sections/approach';

import approachImage from '../assets/img/multiple-girls-stretching.jpeg';

const styles = {
  page: {
    color: '#1D345C',
  },
  mission: {
    maxWidth: '1040px',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '1400px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fff',
      zIndex: -1,
    },
  },
  approach: {
    position: 'relative',
    zIndex: 1,
    webkitTransform: 'skewY(-8deg)',
    transform: 'skewY(-8deg)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '150px',
      right: 0,
      height: '400px',
      webkitTransformOrigin: '100% 0',
      transformOrigin: '100% 0',
      width: '50%',
      background: '#4880E2',
    },
  },
  approachImage: {
    position: 'absolute',
    top: '150px',
    left: 0,
    height: '400px',
    width: '50%',
    overflow: 'hidden',
    '&:before': {
      width: '100%',
      minHeight: '600px',
      content: '""',
      position: 'absolute',
      webkitTransform: 'skewY(8deg)',
      transform: 'skewY(8deg)',
      webkitTransformOrigin: '100% 0',
      transformOrigin: '100% 0',
      background: `url('${approachImage}') no-repeat`,
      backgroundSize: 'cover',
    },
  },
  title: {
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '50px',
  },
  card: {
    zIndex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    borderBottom: '3px solid #48B6BF',
  },
  gridItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '16px',
  },
};

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
        <Grid container justify="center">
          <Grid item xs={12}>
            <Parallax />
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={11} md={10} className={classes.mission}>
            <Mission />
          </Grid>
        </Grid>

        <Grid container justify="center" className={classes.approach}>
          <div className={classes.approachImage} />
          <Grid item xs={11} md={10}>
            <Approach />
          </Grid>
        </Grid>
      </div>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndexPage));
