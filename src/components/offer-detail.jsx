import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link';
import ArrowBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowBackIcon2 from '@material-ui/icons/ArrowBack';
import { FormattedMessage, injectIntl } from 'react-intl';

import Expansion from './expansion';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: '#fff',
  },
  goToContact: {
    marginTop: 16,
    padding: theme.spacing.unit * 3,
  },
  title: {
    letterSpacing: 10,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    position: 'relative',
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: '2rem',
    '& span': {
      width: 10,
    },
  },
  buttonBack: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '12px',
    color: 'rgba(0, 0, 0, 0.75)',
  },
});

const LinkToLocation = props => <Link to="/#location" {...props} />;
const LinkToHome = props => <Link to="/" {...props} />;

const OfferDetail = ({ classes, title, steps }) => (
  <React.Fragment>
    <Typography variant="display2" className={classes.title}>
      <IconButton color="primary" className={classes.buttonBack} component={LinkToHome}>
        <ArrowBackIcon2 />
      </IconButton>
      <span>{title}</span>
    </Typography>

    {steps.map((step, index) => (
      <Expansion key={step.summary} enabled={index === 0} summary={step.summary} details={step.details} />
    ))}

    <Paper square elevation={0} className={classes.goToContact}>
      <Typography>
        <FormattedMessage id="offer_detail_ending" />
      </Typography>
      <Button variant="contained" color="primary" component={LinkToLocation} className={classes.button}>
        <ArrowBackIcon className={classes.leftIcon} />
        <FormattedMessage id="offer_detail_button_contact" />
      </Button>
    </Paper>
  </React.Fragment>
);

OfferDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
};

export default injectIntl(withStyles(styles)(OfferDetail));
