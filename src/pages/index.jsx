import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Zoom from 'react-reveal/Zoom';
// import Button from '@material-ui/core/Button';

import HeaderMenu from '../components/header-menu';
import ParallaxSection from '../sections/parallax';

import missionImage from '../assets/img/girl-stretching.jpeg';
import missionImage2 from '../assets/img/guy-running-city.jpg';
import missionImage3 from '../assets/img/guy-running-track.jpg';
import missionImage4 from '../assets/img/girl-preparing-food.jpg';

const styles = {
  mission: {
    color: '#1D345C',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '1100px',
      transform: 'skewY(-8deg)',
      background: '#fff',
      zIndex: -1,
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
      <div>
        <HeaderMenu />
        <Grid container justify="center">
          <Grid item xs={12}>
            <ParallaxSection />
          </Grid>

          <Grid item xs={11} md={10} className={classes.mission}>
            <Typography variant="display2" color="inherit" className={classes.title}>
              Mijn missie
            </Typography>

            <Grid container justify="space-between">
              <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
                <Zoom duration={500}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={missionImage} title="Girl Stretching" />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="headline" color="inherit">
                        Levensstijl
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Als personal trainer ben ik er voor jou om samen te werken aan een gezonde geest in een gezond
                        lichaam of je nu 16 of 116 bent.
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>

              <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
                <Zoom duration={500}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={missionImage2} title="Girl Stretching" />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="headline" color="inherit">
                        Begeleiding
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Ben je reeds vertrouwd met trainen of weet je niet hoe je moet beginnen? Er is begeleiding voor
                        beginners én gevorderden.
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>

              <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
                <Zoom duration={500}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={missionImage3} title="Girl Stretching" />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="headline" color="inherit">
                        Planning
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Door op maat gemaakte schema’s zorgen we ervoor dat je op een efficiënte en doeltreffende manier
                        je resultaten behaalt.
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>

              <Grid className={classes.gridItem} item xs={12} sm={6} lg={3}>
                <Zoom duration={500}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={missionImage4} title="Girl Stretching" />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="headline" color="inherit">
                        Toewijding
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Alles hangt af van jouw motivatie en toewijding, maar dankzij persoonlijke begeleiding sta je er
                        allesbehalve alleen voor.
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            </Grid>
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
