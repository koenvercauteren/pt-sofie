import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: '#fff',
  },
  uncontained: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  title: {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    color: 'rgba(0, 0, 0, 0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const LinkToContact = props => <Link to="/#contact" {...props} />;

class OfferDetail extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, title, getStepContent, getSteps } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Typography variant="display2" className={classes.title}>
          {title}
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel active>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={`${classes.button} ${classes.uncontained}`}
                    >
                      Terug
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                      {activeStep === steps.length - 1 ? 'Einde' : 'Volgende'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>
              Als je interesse hebt in dit plan en je wilt alle verdere informatie (zoals het volledige prijzenplaatje),
              dan kan je me contacteren door op onderstaande knop te klikken.
            </Typography>
            <Button variant="contained" color="primary" component={LinkToContact} className={classes.button}>
              <ArrowBackIcon className={classes.leftIcon} />
              CONTACT
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

OfferDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  getStepContent: PropTypes.func.isRequired,
  getSteps: PropTypes.func.isRequired,
};

export default withStyles(styles)(OfferDetail);
