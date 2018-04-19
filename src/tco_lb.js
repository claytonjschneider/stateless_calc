import React from 'react';
import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

import './tco.css';

const min = 0;
const max = 8;
const values = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000]

class LoadBalancer extends React.Component {

  state = {
    slider: 0,
    index: 0,
  };

  handleSlider = (event, index) => {
    this.setState({index: index});
    this.setState({slider: values[index]});
  };

  render() {

    const formStyles = {
      block: {
        maxWidth: 600,
        margin: 'auto',
      },
      textfield: {
        width: 600,
        textAlign: 'left',
        marginBottom: 16,
      },
    };

    return (

      <div className="App">

        <PageIntro
          introText="Load Balancer Options"
          introSubText=""
        />

        <div style={formStyles.block}>

          <TextField
            name="lb_bandwidth"
            style={formStyles.textfield}
            type="number"
            floatingLabelText="Total Load Balancer Bandwidth Needed per Month (in Gb)"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <TextField
            name="lb_tenants"
            style={formStyles.textfield}
            type="number"
            unit="Gigabytes"
            floatingLabelText="Number of Tenants Sharing Load Balancer"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <TextField
            name="lb_machines"
            style={formStyles.textfield}
            type="number"
            floatingLabelText="Total Number of Load-Balancing Machines in Use"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <p>
            <span>{"Desired Average Throughput per Tenant (in Mb/s): "}</span>
            <span>{this.state.slider}</span>
          </p>
          <Slider
            name = "lb_average"
            min = {min}
            max = {max}
            step = {1}
            value = {this.state.slider}
            onChange = {this.handleSlider}
          />

        </div>

      </div>

    );
  }
}

export default LoadBalancer;
