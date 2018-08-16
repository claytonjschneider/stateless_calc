import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import PageIntro from '../globals/components/page_intro'

import { hwResults } from './_createTraditionalResults'
import { nfvResults } from './_createNFVResults'
import { statelessResults } from './_createStatelessResults'

import Echart from './_echarts.js'
import ExpansionPanelComponent from './_expansionPanel.js'

const styles = {
  button: {
    background: "#eb5600",
    fontFamily: "Open Sans",
    color: "#F5F5F5"
  }
}

class Results extends React.Component {
  state = {
    chartData: [],
    savingsSum: 0,
    statelessCost: 0,
  }

  expansionPanels = () => {
    return this.state.chartData.map(function(item, key) {
      return (
        <ExpansionPanelComponent key={key} data={item} />
      )
    }, this)
  }

  render ()  {

    if(this.props.data.NFtype === "traditional") {
      this.state.chartData = hwResults(this.props.data.firewall, this.props.data.loadBalancer, this.props.data.router, this.props.data.tenantNumber, this.props.data.tenantThroughput, this.props.data.Vendor);
    }
    else if(this.props.data.NFtype === "nfv") {
      this.state.chartData = nfvResults(this.props.data.firewall, this.props.data.loadBalancer, this.props.data.router, this.props.data.tenantNumber, this.props.data.tenantThroughput, this.props.data.Vendor);
    }

    for(var each in this.state.chartData) {
      this.state.savingsSum += this.state.chartData[each].value;
    }

    this.state.statelessCost = statelessResults(this.props.data.tenantNumber, this.props.data.tenantThroughput);

    const { classes } = this.props;

    return (
      <div className="App">
        <PageIntro introText="Your Monthly Cost of Stateless" introSubText="" />
        <h1>
          ${this.state.statelessCost}
        </h1>

        <PageIntro introText="Your Monthly Savings" introSubText="" />
        <Echart
          title="results"
          savingsSum={this.state.savingsSum}
          data={this.state.chartData}
        />

        <PageIntro introText="How We Save You Money On..." introSubText="" />
        {this.expansionPanels()}

        <PageIntro introText="" introSubText="Learn More About How You Can Save by Contacting Us" />
        <div className="buttonDiv">
          <Button variant="contained" href="https://www.bestateless.com/meetings/jeff246/20-minute-demo" style={styles.button}>
            Advanced
          </Button>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
