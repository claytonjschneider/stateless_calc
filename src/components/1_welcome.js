import React from 'react'
import PropTypes from 'prop-types'
import PageIntro from '../globals/components/page_intro.js'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import RoundImage from '../globals/components/image_round.js'
import Img from '../globals/img/welcomeBackground.jpg'

const styles = {
  button: {
    background: "#eb5600",
    fontFamily: "Open Sans",
    color: "#F5F5F5"
  }
}

class Welcome extends React.Component {
  render () {

    const { classes } = this.props;

    return (
      <div className="App">
        <PageIntro introText="Find out how much you could save with Stateless Akros." introSubText="" />
        <RoundImage img={Img} />
        <div className="buttonDiv">
          <Button variant="contained" style={styles.button} onClick={() => this.props.changePage()}>
            Begin
          </Button>
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
