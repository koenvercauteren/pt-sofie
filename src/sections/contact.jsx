import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Card, CardContent } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';
import { FormattedMessage, injectIntl } from 'react-intl';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from '../styles/sections/contact.styles';
import Button from '../components/button';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: undefined,
      submitState: null,
      name: null,
      email: null,
      message: null,
      'g-recaptcha-response': null,
    };
  }

  componentDidMount() {
    this.setState({ window });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.state.window.gtag('event', 'conversion', {
          send_to: 'AW-769883402/mXxuCNfIhZUBEIr6je8C',
        });
        this.setState({ submitState: 'success' });
      })
      .catch(() => {
        this.setState({ submitState: 'failed' });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ submitState: null });
  };

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.contact}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <ScrollableAnchor id="contact">
                <Typography variant="display2" className={classes.title}>
                  <FormattedMessage id="contact_title" />
                </Typography>
              </ScrollableAnchor>
              <form
                className={classes.form}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <TextField
                  required
                  id="name"
                  name="name"
                  label={formatMessage({ id: 'contact_label_name' })}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  id="email"
                  name="email"
                  label={formatMessage({ id: 'contact_label_email' })}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  multiline
                  rowsMax="4"
                  id="message"
                  name="message"
                  label={formatMessage({ id: 'contact_label_message' })}
                  className={`${classes.textField} ${classes.lastTextfield}`}
                  margin="normal"
                  onChange={this.handleChange}
                />
                {RECAPTCHA_KEY && <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={this.handleRecaptcha} />}
                <Button
                  disabled={Boolean(this.state.submitState)}
                  type="submit"
                  className={classes.button}
                  text={formatMessage({ id: 'contact_button' })}
                >
                  <SendIcon className={classes.leftIcon} />
                </Button>
                <Button
                  disabled={this.state.submitState}
                  type="button"
                  className={`${classes.button} ${classes.callButton}`}
                  text={formatMessage({ id: 'contact_button_two' })}
                  href="tel:+32485197045"
                >
                  <PhoneIcon className={classes.leftIcon} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.submitState}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <span>
              {this.state.submitState === 'success' && formatMessage({ id: 'submit_success' })}
              {this.state.submitState === 'failed' && formatMessage({ id: 'submit_failed' })}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Grid>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Contact));
