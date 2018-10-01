import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';

const getSteps = () => [
  'Intake gesprek',
  'Uitdagingen',
  'Variëteit',
  'Sociale aspect',
  'Voordeliger',
  'Voor wie is het?',
];

const getStepContent = step => {
  switch (step) {
    case 0:
      return `Na een intake gesprek gaan we in een kleine groep van 2 tot 3 personen van start.`;
    case 1:
      return `Door elkaar onderling uit te dagen motiveer en steun je elkaar én is er gezonde competitie.`;
    case 2:
      return `Net zoals bij de individuele sessies zullen we het tempo aanpassen, werken aan spieruithoudingsvermogen en kracht.
                Samen werken we aan een betere fysiek.`;
    case 3:
      return `Door het sociale aspect ligt de druk nog net iets hoger dan anders. Je wil niet enkel aan jezelf werken,
                maar je wil ook je vrienden niet laten zitten.`;
    case 4:
      return `Doordat we in een kleine groep trainen bespaar je tot 15 euro per workout.`;
    case 5:
      return `Dit plan is de ideale stap voor wie graag samen met vrienden sport. Een competitieve geest kan zeker geen kwaad`;
    default:
      return '';
  }
};

class SmallGroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.approachContainer}>
        <Grid item xs={11} md={6} className={classes.approachGridItem}>
          <OfferDetail title="Kleine groep plan" getStepContent={getStepContent} getSteps={getSteps} />
        </Grid>
      </Grid>
    );
  }
}

SmallGroupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(SmallGroupPage));
