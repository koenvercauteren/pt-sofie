import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';

import Button from '../components/button';

const styles = theme => ({
  container: {
    position: 'relative',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '750px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fafafa',
      zIndex: -1,
    },
  },
  notFound: {
    marginTop: '150px',
    maxWidth: '1040px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.75)',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
  },
  card: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content: {
    paddingTop: '50px !important',
    paddingBottom: '50px !important',
  },
  text: {
    textAlign: 'center',
    marginBottom: '30px',
  },
});

const LinkToHome = props => <Link to="/" {...props} />;

const NotFoundPage = ({ classes }) => (
  <Grid container justify="center" className={classes.container}>
    <Grid item xs={11} md={10} className={classes.notFound}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="display4" className={classes.title}>
            404
          </Typography>
          <Typography variant="title" className={classes.text}>
            Pagina niet gevonden.
          </Typography>
          <Button className={classes.button} text="GA TERUG" component={LinkToHome} />
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);
