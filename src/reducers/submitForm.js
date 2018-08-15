import { SUBMIT_FORM } from "../actions/submitForm"

export default (state = {data: {}}, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state, data: action.payload
      };
  }
  return(state);
}
