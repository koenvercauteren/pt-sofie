import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';

const getSteps = () => ['Ladies only', 'Vast schema', 'Focus', 'Bikini body', 'Voor wie is het?'];

const getStepContent = step => {
  switch (step) {
    case 0:
      return `Vrouwen onder elkaar die toch net wat strakkere billen willen.`;
    case 1:
      return `Het bootycamp zal op vaste tijdstippen twee maal per week doorgaan.`;
    case 2:
      return `We leggen de focus op het onderlichaam zodat jij jouw ideale booty kan bereiken.`;
    case 3:
      return `Niet enkel werken we aan de booty, borst en buik zullen ook een inspanning moeten maken!`;
    case 4:
      return `Dit plan is perfect voor de ladies die aan hun aflijning willen werken en wat meer
                vorm in de billen willen krijgen.`;
    default:
      return '';
  }
};

class BootyCampPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.approachContainer}>
        <Grid item xs={11} md={6} className={classes.approachGridItem}>
          <OfferDetail title="Bootycamp plan" getStepContent={getStepContent} getSteps={getSteps} />
        </Grid>
      </Grid>
    );
  }
}

BootyCampPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(BootyCampPage));
