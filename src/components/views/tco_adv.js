import React from 'react';
import ReactDOM from 'react-dom';

import PageIntro from './page_intro.js';
import Button from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './tco.css';

class Begin extends React.Component {
  render() {
    return (

      <MuiThemeProvider>

      <div className="App">

        <PageIntro
          introText="Get Advanced Results"
          introSubText="If you'd like more detailed information on your savings, submit the form below and we'll get in contact soon!"
        />

        <div className="buttonDiv">
          <Button
            label="Begin"
            onClick={this.props.updateBeginForm}
          />
        </div>

      </div>

      </MuiThemeProvider>
    );
  }
}

export default Begin;
