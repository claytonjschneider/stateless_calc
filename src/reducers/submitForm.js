export default (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
