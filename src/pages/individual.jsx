import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';

const getSteps = () => [
  'Test sessie',
  'Persoonlijke doelen',
  'Verbeter je sportiviteit',
  'Verstevig je lichaam',
  'Variëteit',
  'Geavanceerde trainingstechnieken',
  'Voor wie is het?',
];

const getStepContent = step => {
  switch (step) {
    case 0:
      return `We zullen starten met een soort test sessie om na te gaan hoe ver je staat op
                vlak van kracht en conditie. Jouw plan kan dan opgebouwd worden naargelang
                deze resultaten. Er zal jou gezegd worden wat er exact moet gebeuren om zo het giswerk
                er tussenuit te laten en te leiden tot sterke resultaten.`;
    case 1:
      return `Een personal trainer kijkt naar jouw lichaam en houdt rekening met je specifieke doelen.
                Tijdens onze workout van 75 minuten sta ik je bij van begin tot einde. We starten met een
                goede opwarming om zo aan onze sessie te kunnen beginnen. Na de training maken we tijd voor
                stretching en sta je al één stap dichter bij je doel.`;
    case 2:
      return `Door middel van plyometrics, verandering van richting en creatieve conditionering, zullen
                we je sprotiviteit naar een hoger niveau tillen.`;
    case 3:
      return `Ongeacht jouw doel, zal jouw plan zo opgebouwd zijn om je gezond en blessure vrij te houden.
                We zullen streven naar een structurele balans zodat je altijd het beste uit jezelf kan halen.`;
    case 4:
      return `Van week tot week zal je verschillende middelen gebruiken om je doel te bereiken.
                We zullen het tempo aanpassen, werken aan spieruithoudingsvermogen en kracht. Je lichaam zal
                er hard voor moeten werken maar het zal uiteindelijk je ware potentieel naar voren brengen.`;
    case 5:
      return `Eens je er mee weg bent zullen we gecombineerd met de vorige stap geavanceerde technieken toevoegen.
                Deze zullen je toelaten om aan een nog sneller niveau resultaten te halen.`;
    case 6:
      return `Individuele sessies zijn ideaal voor iedereen die op een serieuze maar leuke manier aan zichzelf
                wil werken. Je krijgt persoonlijke begeleiding op jouw eigen tempo met een trainingschema op maat.`;
    default:
      return '';
  }
};

class IndividualPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.approachContainer}>
        <Grid item xs={11} md={6} className={classes.approachGridItem}>
          <OfferDetail title="Individueel plan" getStepContent={getStepContent} getSteps={getSteps} />
        </Grid>
      </Grid>
    );
  }
}

IndividualPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(IndividualPage));
