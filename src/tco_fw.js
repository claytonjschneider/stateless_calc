import React from 'react';
import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

import './tco.css';

const min = 0;
const max = 8;
const values = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000]

class Firewall extends React.Component {

  state = {
    fwSlider: 0,
    fwIndex: 0,
  };

  handleSlider = (event, index) => {
    this.setState({fwIndex: fwIndex});
    this.setState({fwSlider: values[fwIndex]});
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
          introText="Firewall Options"
          introSubText=""
        />

        <div style={formStyles.block}>

          <TextField
            name="fw_bandwidth"
            style={formStyles.textfield}
            type="number"
            floatingLabelText="Total Firewall Bandwidth Needed per Month (in Gb)"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <TextField
            name="fw_tenants"
            style={formStyles.textfield}
            type="number"
            floatingLabelText="Number of Tenants Sharing Firewall"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <TextField
            name="fw_machines"
            style={formStyles.textfield}
            type="number"
            floatingLabelText="Total Number of Firewall Machines in Use"
            hintText="0"
            // errorText="This field is required"
          /><br />

          <p>
            <span>{"Desired Average Throughput per Tenant (in Mb/s): "}</span>
            <span>{this.state.slider}</span>
          </p>
          <Slider
            name = "fw_average"
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

export default Firewall;
