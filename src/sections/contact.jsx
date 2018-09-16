import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Card, CardContent } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

import styles from '../styles/sections/contact.styles';
import Button from '../components/button';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitState: null,
      name: null,
      email: null,
      message: null,
    };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({ submitState: 'success' });
      })
      .catch(error => {
        console.error('Failed to submit', error);
        this.setState({ submitState: 'failed' });
      });
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.contact}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <ScrollableAnchor id="contact">
                <Typography variant="display2" className={classes.title}>
                  Contact
                </Typography>
              </ScrollableAnchor>
              <form
                className={classes.form}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input hidden name="bot-field" onChange={this.handleChange} />
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Naam"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  id="email"
                  name="email"
                  label="E-mail"
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
                  label="Bericht"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange}
                />
                <Button type="submit" className={classes.button} text="VERZEND" />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
