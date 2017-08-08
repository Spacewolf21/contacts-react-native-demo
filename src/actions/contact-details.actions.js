export const SET_CONTACT_DETAILS = 'SET_CONTACT_DETAILS';

export function setContactDetails(contact = null) {
  return {
    type: SET_CONTACT_DETAILS,
    payload: contact,
  };
}
