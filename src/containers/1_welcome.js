import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Welcome from '../components/1_welcome'

const welcomeContainer = props => {
  return( <Welcome changePage={props.changePage} /> )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/form')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(welcomeContainer)
