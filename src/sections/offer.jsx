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
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from '../styles/sections/offer.styles';
import Button from '../components/button';
import ANCHORS from '../globals/anchors';

const LinkToFourWeeks = props => <Link to="/6-weeks" {...props} />;

const LinkToTwelveWeeks = props => <Link to="/12-weeks" {...props} />;

const Offer = ({ classes, intl: { formatMessage } }) => (
  <Grid container justify="center">
    <Grid item xs={11} md={10} className={classes.offer}>
      <ScrollableAnchor id="offer">
        <Typography variant="display2" className={classes.title}>
          <FormattedMessage id="offer_title" />
        </Typography>
      </ScrollableAnchor>

      <Grid container justify="space-between">
        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <FormattedMessage id="offer_intake_title" />
                <PersonIcon className={classes.cardIcon} />
              </Typography>
              <Typography gutterBottom variant="subheading">
                <FormattedMessage id="offer_intake_price" />
              </Typography>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_intake_star_one" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_intake_star_two" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_intake_star_three" />
                  </Typography>
                </div>

                <Button
                  className={classes.button}
                  text={formatMessage({ id: 'offer_button_meet' })}
                  onClick={() => goToAnchor(ANCHORS.CONTACT)}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <FormattedMessage id="offer_kickstart_title" />
                <FitnessCenterIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  <FormattedMessage id="offer_kickstart_price" />
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_kickstart_star_one" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_kickstart_star_two" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_kickstart_star_three" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_kickstart_star_four" />
                  </Typography>
                </div>

                <Button
                  className={classes.button}
                  text={formatMessage({ id: 'offer_button_meet' })}
                  onClick={() => goToAnchor(ANCHORS.CONTACT)}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <FormattedMessage id="offer_4weeks_title" />
                <ScrollAnimation animateIn="wobble" initiallyVisible>
                  <WhatsHotIcon className={classes.cardIcon} />
                </ScrollAnimation>
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  <FormattedMessage id="offer_4weeks_price" />
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  <FormattedMessage id="offer_4weeks_previous_price" />
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_4weeks_star_one" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_4weeks_star_two" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_4weeks_star_three" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_4weeks_star_four" />
                  </Typography>
                </div>

                <Button
                  className={classes.button}
                  text={formatMessage({ id: 'offer_button_discover' })}
                  component={LinkToFourWeeks}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <FormattedMessage id="offer_12weeks_title" />
                <ScrollAnimation animateIn="wobble" initiallyVisible>
                  <WhatsHotIcon className={classes.cardIcon} />
                </ScrollAnimation>
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="subheading">
                  <FormattedMessage id="offer_12weeks_price" />
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  <FormattedMessage id="offer_12weeks_previous_price" />
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_12weeks_star_one" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_12weeks_star_two" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_12weeks_star_three" />
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <FormattedMessage id="offer_12weeks_star_four" />
                  </Typography>
                </div>

                <Button
                  className={classes.button}
                  text={formatMessage({ id: 'offer_button_discover' })}
                  component={LinkToTwelveWeeks}
                />
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
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Offer));
