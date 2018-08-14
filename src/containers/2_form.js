import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../components/2_form'

const formContainer = props => {
  return( <Form changePage={props.changePage} /> )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/results')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(formContainer)
