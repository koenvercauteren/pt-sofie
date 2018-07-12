import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Parallax } from 'react-parallax';

import HeaderMenu from '../components/header-menu';
import backgroundImage from '../assets/img/background-image-landing-page.jpg';
import { Typography } from '../../node_modules/@material-ui/core';

const styles = {
  titleContainer: {
    height: 490,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    background: 'linear-gradient(45deg, #48B6BF 30%, #4880E2 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 55,
    fontSize: '16px',
    padding: '0 72px',
    margin: '20px auto 0 auto',
  },
  title: {
    paddingTop: '150px',
    color: '#fff',
    fontWeight: 300,
    fontSize: '50px',
    textAlign: 'center',
  },
  approach: {
    backgroundColor: 'transparent',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '1100px',
      transform: 'skewY(-8deg)',
      background: '#fff',
    },
  },
  background: {
    minHeight: '1100px',
    width: '100% !important',
    height: 'auto !important',
    objectFit: 'cover',
  },
  parallax: {
    overflow: 'visible !important',
  },
};

const fadeTitle = () => {
  const title = window.document.getElementById('title');
  if (title) title.style.opacity = 1 - window.scrollY / 250;
};

class IndexPage extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', fadeTitle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', fadeTitle);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <HeaderMenu />
        <Grid container justify="center">
          <Grid item xs={12}>
            <Parallax
              className={classes.parallax}
              bgImage={backgroundImage}
              bgClassName={classes.background}
              strength={-50}
            >
              <div className={classes.titleContainer}>
                <Typography id="title" className={classes.title} variant="title">
                  Lorem ipsum<br />
                  dolor sit amet
                </Typography>
                <Button className={classes.button}>BEKIJK HET AANBOD</Button>
              </div>
            </Parallax>
          </Grid>
          <Grid item xs={11} md={10}>
            <section className={classes.approach} />
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
