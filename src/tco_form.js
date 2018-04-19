import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './nav_bar.js';
import PageBanner from './page_banner.js';
import Button from 'material-ui/RaisedButton';
import PageIntro from './page_intro.js';
import HeaderImg from './img/backgrounds/976b04_0f54ebf6146142e2b012a362b98d3ea8-mv2_d_7319_3910_s_4_2.jpg';

import DonutChart from './rechart_donut.js';
import OpsForm from './tco_options.js';

import './tco.css';

var results = [
  {name: 'Hardware Appliances', value: 0},
  {name: 'Backups/Redundancy', value: 0},
  {name: 'Power and Cooling', value: 0},
  {name: 'Support Tickets', value: "$"+921},
  {name: 'Licensing', value: "$"+417},
  {name: 'Network Downtime', value: "$"+14000},
  {name: 'Top-Layer Software', value: 0},
]

const sliderValues = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000]

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: true,
      fwChecked: false,
      lbChecked: false,
      fw_bandwidth: 0,
      fw_tenants: 0,
      fw_machines: 0,
      fw_average: 0,
      lb_bandwidth: 0,
      lb_tenants: 0,
      lb_machines: 0,
      lb_average: 0,
      fwSlider: 0,
      fwIndex: 0,
      lbSlider: 0,
      lbIndex: 0,
    }
  }

  /* Update to Show Form or Results */
  updateResults() {
    this.setState((oldState) => {
      return {
        showForm: !oldState.showForm,
      };
    });
  }

  /* Update to Show User's Choice of NF's */
  updatefwCheck() {
    this.setState((oldState) => {
      return {
        fwChecked: !oldState.fwChecked,
      };
    });
  }
  updatelbCheck() {
    this.setState((oldState)  => {
      return {
        lbChecked: !oldState.lbChecked,
      }
    })
  }

  /* Handle Sliders on Firewall Form */
  handlefwSlider = (event, fwIndex) => {
    this.setState({fwIndex: fwIndex});
    this.setState({fwSlider: sliderValues[fwIndex]});
  };

  /* Handle Sliders on Load Bal Form */
  handlelbSlider = (event, index) => {
    this.setState({lbIndex: index});
    this.setState({lbSlider: sliderValues[index]});
  };

  render() {
    console.log(this.state);

    return (

      <MuiThemeProvider>

      <div className="App">

        <NavBar />

        <PageBanner
          img={HeaderImg}
          bannerText="Stateless TCO Calculator"
        />

        {this.state.showForm ?
          <div>
            <OpsForm
              fwCheckboxUpdate={this.updatefwCheck.bind(this)}
              updatefwSlider={this.handlefwSlider.bind(this)}
              fwChecked={this.state.fwChecked}
              fw_bandwidth={this.state.fw_bandwidth}
              fw_tenants={this.state.fw_tenants}
              fw_machines={this.state.fw_machines}
              fw_average={this.state.fw_average}
              fwSlider={this.state.fwSlider}
              fwIndex={this.state.fwIndex}
              lbCheckboxUpdate={this.updatelbCheck.bind(this)}
              updatelbSlider={this.handlelbSlider.bind(this)}
              lbChecked={this.state.lbChecked}
              lb_bandwidth={this.state.lb_bandwidth}
              lb_tenants={this.state.lb_tenants}
              lb_machines={this.state.lb_machines}
              lb_average={this.state.lb_average}
              lbSlider={this.state.lbSlider}
              lbIndex={this.state.lbIndex}
            />

            <div className="buttonDiv">
              <Button
                label="Results"
                onClick={this.updateResults.bind(this)}
              />
            </div>

          </div>
          :
          <div>
            <PageIntro
              introText="Your estimated monthly savings"
              introSubText=""
            />

            { /* logic component goes here */ }

            <DonutChart
              info={results}
            />

            <div className="buttonDiv">
              <Button
                label="Go back"
                onClick={this.updateResults.bind(this)}
              />
            </div>
          </div>
        }

      </div>

      </MuiThemeProvider>

    );
  }
}

export default Form;
