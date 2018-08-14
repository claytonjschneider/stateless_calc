import React from 'react';
import '../styles/line.css';

class Line extends React.Component {
  render() {

    return (

      <hr className="Line" color={this.props.color} />

    );
  }
}

export default Line;
