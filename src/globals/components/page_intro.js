import React from 'react';

import Line from './line.js';

import '../styles/page_intro.css';

class PageIntro extends React.Component {
  render() {

    let introType = 0;
    if(this.props.introText.length > 0) {
      introType++;
    }
    if(this.props.introSubText.length > 0) {
      introType++;
    }
    const introHeight = 80*introType;

    const introStyle = {
      height: {introHeight} + "px",
      paddingTop: "35px",
    }

    return (
      <div>
      {(introType > 0) &&
        <div className="intro" style={introStyle}>
          <h2>
            {this.props.introText}
          </h2>

          {this.props.introText.length > 0 &&
            <Line color="black" />
          }

          <p>
            {this.props.introSubText}
          </p>

        </div>
      }
      </div>
    );
  }
}

export default PageIntro;
