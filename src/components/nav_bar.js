import React from 'react';

import logo from './img/logo/Statless-logo-black-and-green.png';

import './nav_bar.css';

class NavBar extends React.Component {

  render() {
    return (

      <div className="navBar">

        <img src={logo} className="navBar_Logo" alt="logo" align="left" />

      </div>

    );
  }
}

export default NavBar;
