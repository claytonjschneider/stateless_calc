import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../components/2_form'
import { submitForm } from '../actions/submitForm'

class formContainer extends React.Component {

  render(){

    console.log(this.props);

    return(
      <Form
        changePage={this.props.changePage}
        submitForm={this.props.submitForm}
      /> )
  }
}

const mapStateToProps = state => ({
  data: state.submitForm.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  submitForm,
  changePage: () => push('/results')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formContainer)
