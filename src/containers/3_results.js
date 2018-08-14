import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Results from '../components/3_results'

class resultsContainer extends React.Component {

  render(){
    return( <Results changePage={this.props.changePage} data={this.props.data} /> )
  }
}

const mapStateToProps = state => ({
  data: state.submitForm.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/advanced')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(resultsContainer)
