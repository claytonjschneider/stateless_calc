import React from 'react';

import PageIntro from './page_intro.js';
import Button from 'material-ui/RaisedButton';
import RoundImage from './image_round.js';

import TCOBg from './img/backgrounds/pexels-photo-356074_edited.jpg';

import './tco.css';

class Begin extends React.Component {
  render() {
    return (

      <div className="App">

        <PageIntro
          introText="In one minute or less, find out how much you could save by switching to Stateless."
          introSubText=""
        />

        <RoundImage img={TCOBg} />

        <div className="buttonDiv">
          <Button
            label="Begin"
            onClick={this.props.updateBeginForm}
          />
        </div>

      </div>

    );
  }
}

export default Begin;
