import React from 'react';

import Logo from '../img/statelessLogo.png'

import '../styles/image_round.css';

class RoundImage extends React.Component {
  render() {

    const divStyle = {
      backgroundImage: "url(" + this.props.img + ")",
    }

    return (
      <div className="wrapper">
        <div style={divStyle} className="imgDiv">
          <div className="imgOverlay" />
          <img src={Logo} className="logo" alt="logo" align="center" />
        </div>
      </div>

    );
  }
}

export default RoundImage;
