import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './nav_bar.js';
import PageBanner from './page_banner.js';
import PageIntro from './page_intro.js';

import Button from 'material-ui/RaisedButton';

import DonutChart from './rechart_donut.js';

import HeaderImg from './img/backgrounds/976b04_0f54ebf6146142e2b012a362b98d3ea8-mv2_d_7319_3910_s_4_2.jpg';

import './tco.css';

class Results extends React.Component {
  render() {
    return (

      <div className="App">

        <NavBar />

        <PageBanner
          img={HeaderImg}
          bannerText="TCO Calculator"
        />

        <PageIntro
          introText="Your estimated monthly savings"
          introSubText=""
        />

        <DonutChart
          data={ [
            ['Backups', 75000],
            ['Downtime', 40000],
            ['Network Engineer Compensation', 19000],
            ['Power Consumption', 12000],
            ['Cabling', 3000],
          ] }
        />

      </div>

    );
  }
}

export default Results;
