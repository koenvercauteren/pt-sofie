import React from 'react';
import { object, string, boolean } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  panel: {
    marginBottom: 16,
  },
};

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: props.enabled,
    };
    this.switchState = this.switchState.bind(this);
  }

  switchState() {
    this.setState(state => ({ enabled: !state.enabled }));
  }

  render() {
    const { classes, summary, details } = this.props;
    const { enabled } = this.state;
    return (
      <ExpansionPanel expanded={enabled} className={classes.Panel} onChange={this.switchState}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subheading">{summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

Expansion.propTypes = {
  classes: object,
  summary: string,
  details: string,
  enabled: boolean,
};

Expansion.defaultProps = {
  classes: {},
  summary: '',
  details: '',
  enabled: false,
};

export default withStyles(styles)(Expansion);
