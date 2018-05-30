import React from 'react';
// import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';

import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import FwForm from './tco_fw.js';
import LbForm from './tco_lb.js';

import './tco.css';

class Form extends React.Component {
  render() {

    const formStyles = {
      block: {
        maxWidth: 250,
        margin: 'auto',
      },
      checkbox: {
        textAlign: 'left',
        marginBottom: 16,
      },
    };

    return (

      <div className="App">

        <PageIntro
          introText="Please select the network functions you'd like to consider."
          introSubText=""
        />

        <div style={formStyles.block}>
          <Checkbox
            label="Firewall"
            checked={this.props.fwChecked}
            onCheck={this.props.fwCheckboxUpdate}
            style={formStyles.checkbox}
          />
          <Checkbox
            label="Load Balancer"
            checked={this.props.lbChecked}
            onCheck={this.props.lbCheckboxUpdate}
            style={formStyles.checkbox}
          />
        </div>

        <PageIntro
          introText="Please select whether you'd like to compare against traditional or virtual network functions."
          introSubText=""
        />

        <div style={formStyles.block}>
          <RadioButtonGroup
            name="netFuncType"
            defaultSelected="traditional"
            onChange={this.props.updateRadioButton}
          >
            <RadioButton
              value="traditional"
              label="Traditional (Hardware)"
              style={formStyles.checkbox}
            />
            <RadioButton
              value="virtual"
              label="Virtual"
              checked={this.props.lbChecked}
              onCheck={this.props.lbCheckboxUpdate}
              style={formStyles.checkbox}
            />
          </RadioButtonGroup>
        </div>

        {this.props.fwChecked ?
          <FwForm
            updatefwSlider={this.props.updatefwSlider.bind(this)}
            updatefwBandwidth={this.props.updatefwBandwidth.bind(this)}
            fw_bandwidth={this.props.fw_bandwidth}
            updatefwTenants={this.props.updatefwTenants.bind(this)}
            fw_tenants={this.props.fw_tenants}
            updatefwMachines={this.props.updatefwMachines.bind(this)}
            fw_machines={this.props.fw_machines}
            fw_average={this.props.fw_average}
            fwSlider={this.props.fwSlider}
            fwIndex={this.props.fwIndex}
          />
          : null}
        {this.props.lbChecked ?
          <LbForm
            updatelbSlider={this.props.updatelbSlider.bind(this)}
            updatelbBandwidth={this.props.updatelbBandwidth.bind(this)}
            lb_bandwidth={this.props.lb_bandwidth}
            updatelbTenants={this.props.updatelbTenants.bind(this)}
            lb_tenants={this.props.lb_tenants}
            updatelbMachines={this.props.updatelbMachines.bind(this)}
            lb_machines={this.props.lb_machines}
            lb_average={this.props.lb_average}
            lbSlider={this.props.lbSlider}
            lbIndex={this.props.lbIndex}
          />
          : null}

      </div>
    );
  }
}

export default Form;
