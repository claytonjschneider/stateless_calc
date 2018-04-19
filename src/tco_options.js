import React from 'react';
// import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';

import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

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

        {this.props.fwChecked ?
          <FwForm
            updatefwSlider={this.props.updatefwSlider.bind(this)}
            fw_bandwidth={this.props.fw_bandwidth}
            fw_tenants={this.props.fw_tenants}
            fw_machines={this.props.fw_machines}
            fw_average={this.props.fw_average}
            fwSlider={this.props.fwSlider}
            fwIndex={this.props.fwIndex}
          />
          : null}
        {this.props.lbChecked ?
          <LbForm
            updatelbSlider={this.props.updatelbSlider.bind(this)}
            lb_bandwidth={this.props.lb_bandwidth}
            lb_tenants={this.props.lb_tenants}
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
