import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link';
import ArrowBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowBackIcon2 from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/KeyboardArrowRight';

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
    position: 'relative',
    color: 'rgba(0, 0, 0, 0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  step: {
    position: 'relative',
  },
  stepper: {
    marginBottom: '50px',
  },
  stepClick: {
    position: 'absolute',
    width: '100%',
    height: '25px',
    cursor: 'pointer',
    zIndex: 50,
    '&:focus': {
      outline: 'none',
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

const LinkToContact = props => <Link to="/#contact" {...props} />;
const LinkToHome = props => <Link to="/" {...props} />;

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

  handleClick = activeStep => {
    this.setState({
      activeStep,
    });
  };

  render() {
    const { classes, title, getStepContent, getSteps } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Typography variant="display2" className={classes.title}>
          <IconButton color="primary" className={classes.buttonBack} component={LinkToHome}>
            <ArrowBackIcon2 />
          </IconButton>

          {title}
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
          {steps.map((label, index) => (
            <Step key={label} className={classes.step}>
              <div
                className={classes.stepClick}
                onKeyDown={() => this.handleClick(index)}
                tabIndex={0}
                role="button"
                onClick={() => this.handleClick(index)}
              />
              <StepLabel active onClick={() => this.handleClick(index)}>
                {label}
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <IconButton
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={`${classes.button} ${classes.uncontained}`}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                      Volgende
                      <ArrowForwardIcon className={classes.rightIcon} />
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
              Als je interesse hebt in dit plan en je wilt alle verdere informatie, klik dan op onderstaande knop om
              contact op te nemen.
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
