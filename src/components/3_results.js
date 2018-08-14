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

import { hwResults } from './_createTraditionalResults'
{/*
import { nfvResults } from './_createNFVResults'
*/}
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

    console.log("Props in results comp", this.props);

    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className="App">
        <PageIntro introText="Your Monthly Savings" introSubText="" />
        <Echart
          title="results"
          data = {[
            {name: "Hardware Appliances", value: 0, desc: "Traditional network functions require you to purchase specialized hardware, with significant limitations to performance, scalability, and uptime. We calculate this expense with an average hardware lifetime of 4 years."},
            {name: "Backups/Redundancy", value: 0, desc: "With traditional NFs, downtime prevention requires hot failover backups. We're calculating with 2N redundancy, though some environments might need even more."},
            {name: "Power and Resources", value: 0, desc: "Because Stateless NFs require so much less hardware, the savings in power, cooling, and other resource consumption really adds up. We're calculating this based on average wattage use of each tenant."},
            {name: "Licensing", value: 0, desc: "Other vendors require you to make large recurring license purchases in order to run their software on top of the hardware you already purchased. Average cost of license * number of NFs needed."},
            {name: "Network Downtime", value: 14000, desc: "Downtime is one of the costliest events in any network... By switching to Stateless for your network functions, you could save thousands every month, depending on the size of your data center."},
            {name: "Other", value: 921, desc: "On top of all this, there are still other ways Stateless can save you money. Fewer cables throughout your network, fewer support tickets, etc. Continue to the next page to get your advanced results from us."}
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
