import { GET_CONTACTS_FAILURE } from '../actions/contacts.actions';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_FAILURE:
      return action.payload;
    default:
      return state;
  }
};
