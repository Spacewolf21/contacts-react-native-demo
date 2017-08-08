import { GET_CONTACTS_SUCCESS,
         GET_CONTACTS_FAILURE } from '../actions/contacts.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS:
      return action.payload;
    case GET_CONTACTS_FAILURE:
      return [];
    default:
      return state;
  }
};
