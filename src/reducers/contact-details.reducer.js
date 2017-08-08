import { SET_CONTACT_DETAILS } from '../actions/contact-details.actions';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
