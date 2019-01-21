import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';
import SeoTags from '../components/seo-tags';
import LanguageSwitcher from '../components/language-switcher';

const FourWeeksPage = props => {
  const {
    classes,
    intl: { formatMessage },
  } = props;

  const steps = [
    {
      summary: formatMessage({ id: 'offer_detail_step_one' }),
      details: formatMessage({ id: 'offer_detail_step_one_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_two' }),
      details: formatMessage({ id: 'offer_detail_step_two_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_three' }),
      details: formatMessage({ id: 'offer_detail_step_three_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_four' }),
      details: formatMessage({ id: 'offer_detail_step_four_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_five' }),
      details: formatMessage({ id: 'offer_detail_step_five_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_six' }),
      details: formatMessage({ id: 'offer_detail_step_six_content' }),
    },
    {
      summary: formatMessage({ id: 'offer_detail_step_seven' }),
      details: formatMessage({ id: 'offer_detail_step_seven_content' }),
    },
  ];

  return (
    <Grid container justify="center" className={classes.approachContainer}>
      <SeoTags url="https://www.sofiedb.be/6-weeks" />
      <Grid item xs={11} md={6} className={classes.approachGridItem}>
        <OfferDetail title={formatMessage({ id: 'offer_detail_title' })} steps={steps} />
      </Grid>
      <LanguageSwitcher />
    </Grid>
  );
};

FourWeeksPage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(FourWeeksPage));
