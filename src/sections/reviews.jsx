import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FormattedMessage, injectIntl } from 'react-intl';

import CustomDialog from '../components/dialog-slide';
import Button from '../components/button';
import styles from '../styles/sections/reviews.styles';
import sofieImage from '../assets/img/sofie.jpg';
import ingeImage from '../assets/img/inge.jpg';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dialogTitle: '',
      dialogText: '',
    };
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;
    const { isOpen, dialogTitle, dialogText } = this.state;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={11} md={10} className={classes.reviews}>
          <ScrollableAnchor id="reviews">
            <Typography variant="display2" className={classes.title}>
              <FormattedMessage id="reviews_title" />
            </Typography>
          </ScrollableAnchor>

          <Grid container justify="space-between">
            <Grid className={classes.gridItem} item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <div className={classes.contentContainer}>
                    <img className={classes.image} src={sofieImage} alt="personal-trainer-sofie" />

                    <div className={classes.quoteContainer}>
                      <QuoteIcon className={classes.quoteBefore} />
                      <Typography className={classes.quote} gutterBottom variant="headline">
                        She will challenge and push you to go further
                      </Typography>

                      <Typography className={classes.cardHeadline} variant="headline">
                        - Oana B.
                      </Typography>
                    </div>
                  </div>

                  <Button
                    className={classes.button}
                    text={formatMessage({ id: 'reviews_read_more' })}
                    onClick={() =>
                      this.setState({
                        isOpen: true,
                        dialogTitle: 'Oana B.',
                        dialogText: `
                            I had the pleasure of working with Sofie recently, when I needed a training schedule to accomodate my returning to the gym after a long break prompted by a shoulder inflamation which had bothered me for quite a while.
                            <br />
                            <br />
                            My experience has been very positive, and I highly recommend Sofie for anyone in need of a personalized training schedule, or simply additional advice in regards to exercising in an efficient manner.
                            <br />
                            <br />
                            Sofie displays solid knowledge of her area of expertise, she is able to find interesting alternatives to traditional exercises and explain / demonstrate them very well, and she adjusts the training schedule to her client’s personal needs.
                            <br />
                            <br />
                            She pays attention to detail and listens to the client’s specific requirements, doing her best to find the best fit in terms of type and intensity of exercise, in order to maximize the result, while keeping a good balance with each individual’s level of fitness.
                            <br />
                            <br />
                            She will challenge and push you to go further, without forcing you beyind a limit which might otherwise discourage you.
                            <br />
                            <br />
                            Moreover, Sofie has a pleasant personality – she is friendly, cheerful, flexible and reactive, and the interaction with her in regards to planning sessions, or rescheduling when needed, has been very smooth and professional.
                        `,
                      })
                    }
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid className={classes.gridItem} item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <div className={classes.contentContainer}>
                    <img className={classes.image} src={sofieImage} alt="personal-trainer-sofie" />

                    <div className={classes.quoteContainer}>
                      <QuoteIcon className={classes.quoteBefore} />
                      <Typography className={classes.quote} gutterBottom variant="headline">
                        Ik ben voor het eerst sporten leuk beginnen vinden.
                      </Typography>

                      <Typography className={classes.cardHeadline} variant="headline">
                        - Nomi P.
                      </Typography>
                    </div>
                  </div>

                  <Button
                    className={classes.button}
                    text={formatMessage({ id: 'reviews_read_more' })}
                    onClick={() =>
                      this.setState({
                        isOpen: true,
                        dialogTitle: 'Nomi P.',
                        dialogText: `
                            Toen ik met Sofie begon te trainen had ik al jaren niet meer gesport. Ik vond het niet leuk, was er niet goed in en had telkens wel weer een excuus om er niet aan te beginnen. Uiteindelijk heb ik dan toch de stap gezet en ik ben enorm blij dat ik dit eindelijk gedaan heb.
                            <br />
                            <br />
                            Dankzij de trainingen met Sofie ben ik voor het eerst sporten leuk beginnen vinden. Ze is me steeds blijven motiveren wanneer het moeilijk ging, ook buiten onze trainingen.
                            <br />
                            <br />
                            Voor ik begon te sporten ging ik om de maand naar de osteopaat vanwege nekklachten, sinds 4 maanden ben ik niet meer moeten gaan. De afgelopen maanden heb ik een gebroken rib gehad en een knieblessure (niet door de trainingen).
                            <br />
                            <br />
                            Sofie is steeds naar manieren blijven zoeken om toch zoveel mogelijk te kunnen blijven sporten zonder mezelf te veel te belasten. Ik ben hier enorm dankbaar voor.
                            <br />
                            <br />
                            Momenteel sport ik omdat ik het leuk vind, niet meer omdat ik het gevoel heb dat het moet. Zowel Sofie als personal trainer als de bootcamps die ze organiseert kan ik iedereen aanraden. Ze zorgt voor een training op maat waardoor je meer zelfvertrouwen krijgt en het ook echt kan volhouden.
                          `,
                      })
                    }
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid className={classes.gridItem} item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <div className={classes.contentContainer}>
                    <img className={classes.image} src={ingeImage} alt="personal-trainer-sofie" />

                    <div className={classes.quoteContainer}>
                      <QuoteIcon className={classes.quoteBefore} />
                      <Typography className={classes.quote} gutterBottom variant="headline">
                        Ze staat constant paraat om me tips te geven.
                      </Typography>

                      <Typography className={classes.cardHeadline} variant="headline">
                        - Inge H.
                      </Typography>
                    </div>
                  </div>

                  <Button
                    className={classes.button}
                    text={formatMessage({ id: 'reviews_read_more' })}
                    onClick={() =>
                      this.setState({
                        isOpen: true,
                        dialogTitle: 'Inge H.',
                        dialogText: `
                            Ik begon aan de personal training van Sofie met een klein hartje, geen conditie, een onfit lichaam en bovenal geen zelfvertrouwen. Fit en gezond zijn was wat ik wou bereiken.
                            <br />
                            <br />
                            En dat gebeurt stap per stap ook, ik voel me al veel fitter, ben veel minder uitgeput na een workout en bovenal ik ga met plezier sporten en zie het als een soort ontspanning.
                            <br />
                            <br />
                            Maar het allermooiste waar Sofie voor gezorgd heeft is dat ik mezelf steeds beetje per beetje liever begin te zien, dat ik steeds meer in mezelf en mijn kunnen begin te geloven.
                            <br />
                            <br />
                            Ze staat constant paraat om me tips te geven, maar zeker en vast ook om me goede moed in te spreken. Ze laat me steeds een beetje verder pushen, ze daagt me steeds uit en zorgt ervoor dat elke workout begint met een glimlach en eindigt met een glimlach.
                            <br />
                            <br />
                            Ik kijk nu al uit naar onze verdere samenwerking! Op naar een fit en gezond en happy life!
                        `,
                      })
                    }
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div className={classes.content} />
        </Grid>

        <CustomDialog
          close={() => this.setState({ isOpen: false })}
          isOpen={isOpen}
          title={dialogTitle}
          text={dialogText}
        />
      </Grid>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(withStyles(styles)(Reviews));
