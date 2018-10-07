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

import StarIcon from '@material-ui/icons/Star';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';

import styles from '../styles/sections/offer.styles';
import Button from '../components/button';
import ANCHORS from '../globals/anchors';

const LinkToIndividual = props => <Link to="/individual" {...props} />;

const LinkToSmallGroup = props => <Link to="/small-group" {...props} />;

const LinkToBootycamp = props => <Link to="/bootycamp" {...props} />;

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
                <span>Intake gesprek</span>
                <PersonIcon className={classes.cardIcon} />
              </Typography>
              <Typography gutterBottom variant="headline">
                € 0
              </Typography>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Kennismaking</span>
                  </Typography>

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

                <Button
                  className={classes.button}
                  text="MAAK EEN AFSPRAAK"
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
                <span>1 training</span>
                <GroupIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="headline">
                  € 50
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
                    <span>Persoonlijke begeleiding</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Werk aan jezelf</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Afwisselende trainingsmethode</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToSmallGroup} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>6 weken</span>
                <GroupAddIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="headline">
                  € 300
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
                    <span>Één tot twee trainingen per week</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Dynamisch trainingsplan</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Maaltijd begeleiding</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Opvolging</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToBootycamp} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Bootycamp</span>
                <GroupAddIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="headline">
                  € 12
                </Typography>
              </div>

              <Divider />

              <div className={classes.listContainer}>
                <div className={classes.cardBulletList}>
                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>1 uur 30 minuten</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Ladies only</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Borst, buik, billen</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Focus op onderlichaam</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToBootycamp} />
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
