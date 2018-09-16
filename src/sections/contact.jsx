import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Card, CardContent } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';

import styles from '../styles/sections/contact.styles';
import Button from '../components/button';

const Contact = props => {
  const { classes } = props;

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
            <form className={classes.form} name="contact" method="POST" data-netlify="true" s>
              <TextField required id="name" label="Naam" className={classes.textField} margin="normal" />
              <TextField required id="email" label="E-mail" className={classes.textField} margin="normal" />
              <TextField
                required
                multiline
                rowsMax="4"
                id="email"
                label="Bericht"
                className={classes.textField}
                margin="normal"
              />
              <Button type="submit" className={classes.button} text="VERZEND" />
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
