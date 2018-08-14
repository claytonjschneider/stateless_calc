import { SUBMIT_FORM } from "../actions/submitForm"

export default (state = {data: {}}, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      console.log("Submit_form case!");
      return {
        ...state, data: action.payload
      };
  }
  return(state);
}
