import React from 'react';

import Line from './line.js';

import './page_banner.css';

class PageBanner extends React.Component {
  render() {

    const divStyle = {
      backgroundImage: "url(" + this.props.img + ")",
      backgroundSize: "cover",
    }

    return (
      <div className="banner" style={divStyle}>

          <h2>
            {this.props.bannerText}
            <Line color="white" />
          </h2>

      </div>
    );
  }
}

export default PageBanner;
