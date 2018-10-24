import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor';
import Link from 'gatsby-link';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import StarIcon from '@material-ui/icons/Star';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WhatsHotIcon from '@material-ui/icons/Whatshot';
import PersonIcon from '@material-ui/icons/Person';

import styles from '../styles/sections/offer.styles';
import Button from '../components/button';
import ANCHORS from '../globals/anchors';

const LinkToFourWeeks = props => <Link to="/4-weeks" {...props} />;

const LinkToTwelveWeeks = props => <Link to="/12-weeks" {...props} />;

const Offer = ({ classes }) => (
  <Grid container justify="center">
    <Grid item xs={11} md={10} className={classes.offer}>
      <ScrollableAnchor id="offer">
        <Typography variant="display2" className={classes.title}>
          Aanbod
        </Typography>
      </ScrollableAnchor>

      <Grid container justify="space-between">
        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Intake</span>
                <PersonIcon className={classes.cardIcon} />
              </Typography>
              <Typography gutterBottom variant="subheading">
                GRATIS
              </Typography>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Concretiseren van doelstellingen</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Medisch en fysiek verleden bespreken</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Uitleg methodiek</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="AFSPRAAK" onClick={() => goToAnchor(ANCHORS.CONTACT)} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Kickstart</span>
                <FitnessCenterIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  € 14.99
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>60 minuten</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Introductie sessie</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Full body workout</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Tips &amp; Tricks</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="AFSPRAAK" onClick={() => goToAnchor(ANCHORS.CONTACT)} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>4 weken</span>
                <ScrollAnimation animateIn="wobble" initiallyVisible>
                  <WhatsHotIcon className={classes.cardIcon} />
                </ScrollAnimation>
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  € 350
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  € 400
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>75 minuten</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Twee trainingen per week</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Dynamisch trainingsplan</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Voedingsadvies</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToFourWeeks} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>12 weken</span>
                <ScrollAnimation animateIn="wobble" initiallyVisible>
                  <WhatsHotIcon className={classes.cardIcon} />
                </ScrollAnimation>
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  € 1000
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  € 1200
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>75 minuten</span>
                  </Typography>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Twee trainingen per week</span>
                  </Typography>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Dynamisch trainingsplan</span>
                  </Typography>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Voedingsadvies</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToTwelveWeeks} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

Offer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Offer);
