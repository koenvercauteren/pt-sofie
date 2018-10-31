import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';
import SeoTags from '../components/seo-tags';

class TwelveWeeksPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getStepContent = this.getStepContent.bind(this);
  }

  getStepContent(step) {
    const {
      intl: { formatMessage },
    } = this.props;

    switch (step) {
      case 0:
        return formatMessage({ id: 'offer_detail_step_one_content' });
      case 1:
        return formatMessage({ id: 'offer_detail_step_two_content' });
      case 2:
        return formatMessage({ id: 'offer_detail_step_three_content' });
      case 3:
        return formatMessage({ id: 'offer_detail_step_four_content' });
      case 4:
        return formatMessage({ id: 'offer_detail_step_five_content' });
      case 5:
        return formatMessage({ id: 'offer_detail_step_six_content' });
      case 6:
        return formatMessage({ id: 'offer_detail_step_seven_content' });
      case 7:
        return formatMessage({ id: 'offer_detail_step_eight_content' });
      default:
        return '';
    }
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    const getSteps = () => [
      formatMessage({ id: 'offer_detail_step_one' }),
      formatMessage({ id: 'offer_detail_step_two' }),
      formatMessage({ id: 'offer_detail_step_three' }),
      formatMessage({ id: 'offer_detail_step_four' }),
      formatMessage({ id: 'offer_detail_step_five' }),
      formatMessage({ id: 'offer_detail_step_six' }),
      formatMessage({ id: 'offer_detail_step_seven' }),
      formatMessage({ id: 'offer_detail_step_eight' }),
    ];

    return (
      <Grid container justify="center" className={classes.approachContainer}>
        <SeoTags url="https://www.sofiedb.be/12-weeks" />
        <Grid item xs={11} md={6} className={classes.approachGridItem}>
          <OfferDetail
            title={formatMessage({ id: 'offer_detail_title' })}
            getStepContent={this.getStepContent}
            getSteps={getSteps}
          />
        </Grid>
      </Grid>
    );
  }
}

TwelveWeeksPage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(TwelveWeeksPage));
