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

        {this.props.fwChecked ? <FwForm /> : null}
        {this.props.lbChecked ? <LbForm /> : null}

      </div>
    );
  }
}

export default Form;
