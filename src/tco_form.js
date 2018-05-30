import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './nav_bar.js';
import PageBanner from './page_banner.js';
import Button from 'material-ui/RaisedButton';
import PageIntro from './page_intro.js';
import HeaderImg from './img/backgrounds/976b04_0f54ebf6146142e2b012a362b98d3ea8-mv2_d_7319_3910_s_4_2.jpg';

import BeginPage from './tco_begin.js';
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
      savings: 0,
      beginForm: true,
      showForm: true,
      fwChecked: false,
      lbChecked: false,
      virtualNF: false,
      fwSlider: 0,
      fwIndex: 0,
      fw_bandwidth: 0,
      fw_tenants: 0,
      fw_machines: 0,
      fw_average: 0,
      lb_bandwidth: 0,
      lb_tenants: 0,
      lb_machines: 0,
      lb_average: 0,
      lbSlider: 0,
      lbIndex: 0,
      t1_fw: 2400,
      t2_fw: 2700,
      t3_fw: 5600,
      t4_fw: 10800,
      usrInfo: {name: '', email: '', company: ''},
    }
  }

  /* Update to Move from Begin Page */
  updateBeginForm() {
    this.setState((oldState) => {
      return {
        beginForm: !oldState.beginForm,
      }
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
      };
    });
  }

  /* Update to Reflect User's Choice of Virtual/Traditional */
  radioButtonUpdate() {
    this.setState((oldState)  => {
      return {
        virtualNF: !oldState.virtualNF,
      };
    });
  }

  /* Text Field on Firewall - Bandwidth */
  updatefwBandwidth (event, value) {
    this.setState((fw_bandwidth) => {
      return {
        fw_bandwidth: value,
      };
    });
  }

  /* Text Field on Firewall - Tenants */
  updatefwTenants (event, value) {
    this.setState((fw_tenants) => {
      return {
        fw_tenants: value,
      };
    });
  }

  /* Text Field on Firewall - Machines */
  updatefwMachines (event, value) {
    this.setState((fw_machines) => {
      return {
        fw_machines: value,
      };
    });
  }

  /* Handle Sliders on Firewall Form */
  handlefwSlider = (event, fwIndex) => {
    this.setState({fwIndex: fwIndex});
    this.setState({fwSlider: sliderValues[fwIndex]});
  };

  /* Text Field on Load Balancer - Bandwidth */
  updatelbBandwidth (event, value) {
    this.setState((lb_bandwidth) => {
      return {
        lb_bandwidth: value,
      };
    });
  }

  /* Text Field on Load Balancer - Tenants */
  updatelbTenants (event, value) {
    this.setState((lb_tenants) => {
      return {
        lb_tenants: value,
      };
    });
  }

  /* Text Field on Load Balancer - Machines */
  updatelbMachines (event, value) {
    this.setState((lb_machines) => {
      return {
        lb_machines: value,
      };
    });
  }

  /* Handle Sliders on Load Bal Form */
  handlelbSlider = (event, lbIndex) => {
    this.setState({lbIndex: lbIndex});
    this.setState({lbSlider: sliderValues[lbIndex]});
  };

  /* Update Total Savings */
  savingsUpdate() {
    var savings = 0;
    for (var i = 0; i < results.length; i++) {
      savings = savings + results[i].value;
    }
    this.setState({savings});
  };

  /* Update Results Array */
  updateResults() {
    /* Update Bool Val to Show Form or Results */
    this.setState((oldState) => {
      return {
        showForm: !oldState.showForm,
      };
    });
    /* Hardware Appliances */
    results[0].value =
      (this.state.fw_bandwidth/48)*(((0.6*this.state.t1_fw)/0.1)+((0.2*this.state.t2_fw)/1)+((0.1*this.state.t3_fw)/2)+((0.1*this.state.t4_fw)/4))

    /* Backups/Redundancy */
    results[1].value = results[0].value
    /* Power and Cooling */
    results[2].value = (43200)*(0.1)
    /* Support Tickets */
    results[3].value = 921
    /* Licensing */
    results[4].value = 421
    /* Network Downtime */
    results[5].value = 14000
    /* Top-Layer Software */
    results[6].value = 0

    /* Total Savings */
    this.savingsUpdate();
  };

  showBeginPage() {
    if (this.state.beginForm) {
      return (
        <BeginPage
          beginForm={this.state.beginForm}
          updateBeginForm={this.updateBeginForm.bind(this)}
        />
      )
    }
    else {
      return (null)
    }
  }

  showFormAndResultsPage() {
    if (!this.state.beginForm && this.state.showForm) {
      return (
        <div>
          <OpsForm
            /* Checkbox Props */
            fwCheckboxUpdate={this.updatefwCheck.bind(this)}
            fwChecked={this.state.fwChecked}
            lbCheckboxUpdate={this.updatelbCheck.bind(this)}
            lbChecked={this.state.lbChecked}

            /* RadioButton Props */
            updateRadioButton={this.radioButtonUpdate.bind(this)}
            virtualNF={this.state.virtualNF}

            /* Firewall Props */
            updatefwSlider={this.handlefwSlider.bind(this)}
            fw_bandwidth={this.state.fw_bandwidth}
            updatefwBandwidth={this.updatefwBandwidth.bind(this)}
            fw_tenants={this.state.fw_tenants}
            updatefwTenants={this.updatefwTenants.bind(this)}
            fw_machines={this.state.fw_machines}
            updatefwMachines={this.updatefwMachines.bind(this)}
            fw_average={this.state.fw_average}
            fwSlider={this.state.fwSlider}
            fwIndex={this.state.fwIndex}

            /* Load Balancer Props */
            updatelbSlider={this.handlelbSlider.bind(this)}
            lb_bandwidth={this.state.lb_bandwidth}
            updatelbBandwidth={this.updatelbBandwidth.bind(this)}
            lb_tenants={this.state.lb_tenants}
            updatelbTenants={this.updatelbTenants.bind(this)}
            lb_machines={this.state.lb_machines}
            updatelbMachines={this.updatelbMachines.bind(this)}
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
      )
    }
    else if (!this.state.beginForm && !this.state.showForm) {
      return (
        <div>
          <PageIntro
            introText="Your estimated monthly savings"
            introSubText=""
          />

          <DonutChart
            info={results}
            savings={this.state.savings}
          />

          <div className="buttonDiv">
            <Button
              label="Go back"
              onClick={this.updateResults.bind(this)}
            />
          </div>
        </div>
      )
    }
    else {
      return (null)
    }
  }

  render() {

    return (

      <MuiThemeProvider>

      <div className="App">

        <NavBar />

        <PageBanner
          img={HeaderImg}
          bannerText="TCO Calculator"
        />

        {this.showBeginPage()}
        {this.showFormAndResultsPage()}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;
