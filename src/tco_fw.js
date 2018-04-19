import React from 'react';
import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

import './tco.css';

const min = 0;
const max = 8;

class Firewall extends React.Component {

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
            <span>{this.props.fwSlider}</span>
          </p>
          <Slider
            name = "fw_average"
            min = {min}
            max = {max}
            step = {1}
            value = {this.props.fwIndex}
            onChange = {this.props.updatefwSlider}
          />

        </div>

      </div>
    );
  }
}

export default Firewall;
