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
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const rawContacts = await getContacts();
      dispatch(stopLoading());
      const contacts = rawContacts.map(contact => Contact(contact));
      console.log(contacts);
      dispatch(getContactsSuccess(contacts));
    } catch (err) {
      console.log('Error happened');
      dispatch(stopLoading());
      dispatch(getContactsFailed(err));
    }
    // getContacts()
    //   .then((data) => {
    //     dispatch(stopLoading());
    //     return data;
    //   })
    //   .then((data) => {
    //     const contacts = data.map(contact => Contact(contact));
    //     dispatch(getContactsSuccess(contacts));
    //   })
    //   .catch((err) => {
    //     dispatch(stopLoading());
    //     dispatch(getContactsFailed(err));
    //   });
  };
}
