import { getContacts } from '../services/contacts.service';
import Contact from '../models/contact.model';
import { startLoading, stopLoading } from './loading.actions';

export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

export function getContactsSuccess(contacts = []) {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: contacts,
  };
}

export function getContactsFailed(msg = null) {
  return {
    type: GET_CONTACTS_FAILURE,
    payload: msg,
  };
}

export function getContactsFromApi() {
  return (dispatch) => {
    dispatch(startLoading());
    getContacts()
      .then((data) => {
        dispatch(stopLoading());
        return data;
      })
      .then((data) => {
        const contacts = data.map(contact => Contact(contact));
        dispatch(getContactsSuccess(contacts));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getContactsFailed(err));
      });
  };
}
