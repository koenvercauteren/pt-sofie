import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ScrollableAnchor from 'react-scrollable-anchor';
import Link from 'gatsby-link';

import StarIcon from '@material-ui/icons/Star';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';

import styles from '../styles/sections/offer.styles';
import Button from '../components/button';

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
        <Grid className={classes.gridItem} item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Individueel</span>
                <PersonIcon className={classes.cardIcon} />
              </Typography>
              <Typography gutterBottom variant="headline">
                € 50
              </Typography>

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
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToIndividual} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Kleine groep</span>
                <GroupIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="headline">
                  € 80
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  € 100
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
                    <span>Bespaar tot €15 per training</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Sporten met vrienden</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Afwisselende trainingsmethode</span>
                  </Typography>

                  <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                    <StarIcon className={classes.cardBulletIcon} />
                    <span>Binnen of buiten trainen</span>
                  </Typography>
                </div>

                <Button className={classes.button} text="ONTDEK MEER" component={LinkToSmallGroup} />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={4}>
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
