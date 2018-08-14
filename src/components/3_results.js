import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'

import PageIntro from '../globals/components/page_intro'

import PieChart from './_piechart.js'
import Echart from './_echarts.js'

const styles = {
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  expand: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
  },
  heading: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontBasis: '33.33%',
    flexShrink: 0,
    color: "#595959",
  },
  secondaryHeading: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#eb5600",
  },
  panelDetails: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    color: "#595959",
  }
};

class Results extends React.Component {
  state = {
    expanded: null,
  };

  handleExpand = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render ()  {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className="App">
        <PageIntro introText="Your Monthly Savings" introSubText="" />
        <Echart
          title="results"
          data={[
            ["Category", "Amount"],
            ["Backups", 75000],
            ["Downtime", 40000],
            ["Network Engineer Compensation", 19000],
            ["Power Consumption", 12000],
            ["Cabling", 3000],
          ]}
        />
        <div className={classes.root}>
          <ExpansionPanel className={classes.expand} expanded={expanded === 'panel1'} onChange={this.handleExpand('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>TypeSet 1</Typography>
              <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quamm mattis feuqiat. Aliquam eget maximum est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
