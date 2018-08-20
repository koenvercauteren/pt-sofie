import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import StarIcon from '@material-ui/icons/Star';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';

import styles from '../styles/sections/offer.styles';
import Button from '../components/button';

const Offer = ({ classes }) => (
  <Grid container justify="center">
    <Grid item xs={11} md={10} className={classes.offer}>
      <Typography variant="display2" className={classes.title}>
        Aanbod
      </Typography>

      <Grid container justify="space-between">
        <Grid className={classes.gridItem} item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Individueel</span>
                <PersonIcon className={classes.cardIcon} />
              </Typography>
              <Typography gutterBottom variant="headline">
                € 99,95
              </Typography>

              <Divider />

              <div className={classes.cardBulletList}>
                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>
              </div>

              <Button className={classes.button} text="ONTDEK MEER" />
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
                  € 75,95
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  € 99,95
                </Typography>
              </div>

              <Divider />

              <div className={classes.cardBulletList}>
                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>
              </div>

              <Button className={classes.button} text="ONTDEK MEER" />
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.gridItem} item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.cardHeadline} gutterBottom variant="headline">
                <span>Bootcamp</span>
                <GroupAddIcon className={classes.cardIcon} />
              </Typography>

              <div className={classes.pricing}>
                <Typography gutterBottom variant="headline">
                  € 25,00
                </Typography>
                <Typography className={classes.normalPrice} variant="subheading">
                  € 99,95
                </Typography>
              </div>

              <Divider />

              <div className={classes.cardBulletList}>
                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>

                <Typography className={classes.cardBulletItem} gutterBottom variant="subheading">
                  <StarIcon className={classes.cardBulletIcon} />
                  <span>Lorem ipsum dolor sit amet</span>
                </Typography>
              </div>

              <Button className={classes.button} text="ONTDEK MEER" />
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
