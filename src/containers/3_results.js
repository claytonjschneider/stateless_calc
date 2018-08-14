import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Results from '../components/3_results'

const resultsContainer = props => {
  return( <Results changePage={props.changePage} /> )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/advanced')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(resultsContainer)
