import React from 'react'
import PropTypes from 'prop-types'
import PageIntro from '../globals/components/page_intro.js'
import FormControl from '@material-ui/core/FormControl'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/lab/Slider'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formControl: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px'
  },
  label: {
    fontFamily: "Open Sans",
    fontSize: "18px"
  },
  buttonGroup: {
    position: 'relative',
    display: 'flex',
    marginLeft: '45%',
    marginRight: 'auto',
  },
  radio: {
    color: "#32C59F"
  },
  checkbox: {
    color: "#32C59F"
  },
  select: {
    textAlign: 'left',
  },
  textField: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px'
  },
  slider: {
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px',
  },
  button: {
    background: "#eb5600",
    fontFamily: "Open Sans",
    color: "#F5F5F5"
  }
}

const sliderValues = [
  10,
  50,
  100,
  500,
  1000,
  5000,
  10000,
  50000,
  100000,
]

class Form extends React.Component {

  state = {
    NFtype: "traditional",
    firewall: false,
    loadBalancer: false,
    router: false,
    value: 0,
    firewallVendor: 0,
    ciscoFirewall: {
      t1: 1,
      t2: 2,
      t3: 3,
      t4: 4,
    },
    juniperFirewall: {
      t1: 5,
      t2: 6,
      t3: 7,
      t4: 8,
    },
    paloAltoFirewall: {
      t1: 9,
      t2: 10,
      t3: 11,
      t4: 12,
    },
    fortinetFirewall: {
      t1: 13,
      t2: 14,
      t3: 15,
      t4: 16,
    },
    tenantNumber: 0,
    tenantIndex: 0,
    tenantThroughput: 0,
  };

  handleRadio = event => {
    this.setState({ NFtype: event.target.value });
  };

  handleCheckboxes = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleVendor = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTextField = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSlider = (event, tenantIndex) => {
    this.setState({ tenantIndex });
    this.setState({tenantThroughput: sliderValues[tenantIndex]});
  };

  render() {
    const { classes } = this.props;

    return (

      <div className="App">
        <FormControl component="fieldset" className={classes.root}>
          {/* Select Class of NF */}
          <PageIntro introText="Compare to Traditional or Virtual?" introSubText="" />
          <RadioGroup
            className={classes.buttonGroup}
            name="NFtype"
            value={this.state.NFtype}
            onChange={this.handleRadio}
          >
            <FormControlLabel
              classes={{
                label: classes.label
              }}
              value="traditional"
              control={<Radio color={styles.radio.color} />}
              label="Traditional"
            />
            <FormControlLabel
              classes={{
                label: classes.label
              }}
              value="nfv"
              control={<Radio color={styles.radio.color} />}
              label="Virtual"
            />
          </RadioGroup>
        </FormControl>
          {/* Checkboxes to Select which NFs to Compare */}
        <FormControl component="fieldset" className={classes.root}>
          <PageIntro introText="Select the Network Functions You Want to Consider" introSubText="" />
          <FormGroup className={classes.buttonGroup}>
            <FormControlLabel
              classes={{
                label: classes.label
              }}
              control={
                <Checkbox color={styles.checkbox.color} checked={this.state.firewall} onChange={this.handleCheckboxes('firewall')} value="firewall" />
              }
              label="Firewall"
            />
            <FormControlLabel
              classes={{
                label: classes.label
              }}
              control={
                <Checkbox color={styles.checkbox.color} checked={this.state.loadBalancer} onChange={this.handleCheckboxes('loadBalancer')} value="loadBalancer" />
              }
              label="Load Balancer"
            />
            <FormControlLabel
              classes={{
                label: classes.label
              }}
              control={
                <Checkbox color={styles.checkbox.color} checked={this.state.router} onChange={this.handleCheckboxes('router')} value="router" />
              }
              label="Router"
            />
          </FormGroup>
        </FormControl>
        {/* Vendor Options */}
        <PageIntro introText="Select Vendor to Compare" introSubText="" />
        <FormControl required className={classes.formControl}>
          <Select
            value={this.state.firewallVendor}
            onChange={this.handleVendor}
            name="firewallVendor"
            inputProps={{
              id: 'vendor-required',
            }}
            className={classes.select}
          >
            <MenuItem value={this.state.ciscoFirewall}>Cisco</MenuItem>
            <MenuItem value={this.state.juniperFirewall}>Juniper</MenuItem>
            <MenuItem value={this.state.paloAltoFirewall}>Palo Alto</MenuItem>
            <MenuItem value={this.state.fortinetFirewall}>Fortinet</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <br/>

        {/* Environment Variables */}
        <PageIntro introText="Enter the Following Info about Your Environment" introSubText="" />
        <TextField
          id="tenantNumber"
          className={classes.textField}
          label="Number of Tenants / VMs"
          type="number"
          value={this.state.tenantNumber}
          onChange={this.handleTextField('tenantNumber')}
          placeholder="0"
          inputProps={{
            min: "0",
            step: "1",
          }}
        />
        <Slider className={classes.slider} value={this.state.tenantIndex} min={0} max={8} step={1} onChange={this.handleSlider} />

        <div className="buttonDiv">
          <Button variant="contained" style={styles.button} onClick={() => this.props.changePage()}>
            Results
          </Button>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
