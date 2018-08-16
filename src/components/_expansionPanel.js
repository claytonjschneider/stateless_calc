import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = {
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  expand: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
  },
  heading: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontBasis: '33.33%',
    flexShrink: 0,
    color: "#595959",
  },
  secondaryHeading: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#eb5600",
    marginLeft: 'auto',
    paddingRight: '35px',
  },
  panelDetails: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    color: "#595959",
  }
};

class ExpansionPanelComponent extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel className={classes.expand}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{this.props.data.name}</Typography>
            <Typography className={classes.secondaryHeading}>${this.props.data.value}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.panelDetails}>
              {this.props.data.desc}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanelComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelComponent);
