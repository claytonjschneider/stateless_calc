import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './nav_bar.js';
import PageBanner from './page_banner.js';
import PageIntro from './page_intro.js';
import Button from 'material-ui/RaisedButton';
import RoundImage from './image_round.js';

import HeaderImg from './img/backgrounds/976b04_0f54ebf6146142e2b012a362b98d3ea8-mv2_d_7319_3910_s_4_2.jpg';
import TCOBg from './img/backgrounds/pexels-photo-356074_edited.jpg';

import './tco.css';

class Begin extends React.Component {
  render() {
    return (

      <MuiThemeProvider>

      <div className="App">

        <NavBar />

        <PageBanner
          img={HeaderImg}
          bannerText="TCO Calculator"
        />
        <PageIntro
          introText="In one minute or less, find out how much you could save by switching to Stateless."
          introSubText=""
        />

        <RoundImage img={TCOBg} />

        <div className="buttonDiv">
          <Button label="Begin" />
        </div>

      </div>

      </MuiThemeProvider>

    );
  }
}

export default Begin;
