import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Parallax as ReactParallax } from 'react-parallax';
import { Typography } from '@material-ui/core';

import backgroundImage from '../../assets/img/background-image-landing-page.jpg';

const styles = {
  titleContainer: {
    height: 590,
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
    padding: '0 76px',
    margin: '20px auto 0 auto',
  },
  title: {
    paddingTop: '100px',
    color: '#fff',
    textShadow: '1px 1px #525f7f',
    fontWeight: 300,
    fontSize: '40px',
    textAlign: 'center',
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

class Parallax extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', fadeTitle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', fadeTitle);
  }

  render() {
    const { classes } = this.props;

    return (
      <ReactParallax
        className={classes.parallax}
        bgImage={backgroundImage}
        bgClassName={classes.background}
        strength={-50}
      >
        <div className={classes.titleContainer}>
          <Typography id="title" className={classes.title} variant="title">
            Fitheid en welzijn,<br />
            de juiste manier
          </Typography>
          <Button className={classes.button}>BEKIJK HET AANBOD</Button>
        </div>
      </ReactParallax>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Parallax);
