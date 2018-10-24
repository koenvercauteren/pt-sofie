import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/pages/index.styles';
import OfferDetail from '../components/offer-detail';
import SeoTags from '../components/seo-tags';

const getSteps = () => [
  'Voor wie is het?',
  'Kickstart',
  'Persoonlijke doelen',
  'Verbeter je sportiviteit',
  'Verstevig je lichaam',
  'Variëteit',
  'Verdeel de kost',
  'Lange termijn',
];

const getStepContent = step => {
  switch (step) {
    case 0:
      return `Personal training is ideaal voor iedereen die op een serieuze maar leuke manier aan zichzelf
              wil werken. Je krijgt persoonlijke begeleiding op je eigen tempo met een trainingschema op maat.`;
    case 1:
      return `We gaan aan de slag met een testsessie om na te gaan hoe ver je al staat op vlak van kracht en/of conditie.
                Je persoonlijk plan kan dan opgemaakt worden.`;
    case 2:
      return `Een personal trainer kijkt naar je lichaam en houdt rekening met je specifieke doelen.
                Tijdens onze workout van 75 minuten sta ik je bij van begin tot einde. We starten met een
                goede opwarming om zo aan onze sessie te kunnen beginnen. Na de training maken we tijd voor
                stretching en sta je al één stap dichter bij je doel.`;
    case 3:
      return `Door middel van plyometrics, verandering van richting en creatieve conditionering, zullen
                we je sportiviteit naar een hoger niveau tillen.`;
    case 4:
      return `Ongeacht je doel, zal je plan zo opgebouwd zijn om je gezond en blessure vrij te houden.
                We zullen streven naar een structurele balans zodat je altijd het beste uit jezelf kan halen.`;
    case 5:
      return `Van week tot week zal je verschillende middelen gebruiken om je doel te bereiken.
                We zullen het tempo aanpassen, werken aan spieruithoudingsvermogen en kracht. Je grenzen
                zullen verlegd worden.`;
    case 6:
      return `Kies voor groep training en sport voordeliger met vrienden en familie.`;
    case 7:
      return `Voor 3 maanden sta je onder begeleiding en wordt je opgevolgd op verschillende vlakken,
                door regelmaat en consistentie ben je zeker van je resultaat.`;
    default:
      return '';
  }
};

class FourWeeksPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.approachContainer}>
        <SeoTags url="https://www.sofiedb.be/12-weeks" />
        <Grid item xs={11} md={6} className={classes.approachGridItem}>
          <OfferDetail title="Personal training" getStepContent={getStepContent} getSteps={getSteps} />
        </Grid>
      </Grid>
    );
  }
}

FourWeeksPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(styles)(FourWeeksPage));
