import { setContactDetails, SET_CONTACT_DETAILS } from '../contact-details.actions';

import Contact from '../../models/contact.model';

describe('contact details actions', () => {
  it('should create an action to set the current contact', () => {
    const contact = Contact({});

    const expectedAction = {
      type: SET_CONTACT_DETAILS,
      payload: contact,
    };

    expect(setContactDetails(contact)).toEqual(expectedAction);
  });

  it('should create an action to clear the current contact', () => {
    const expectedAction = {
      type: SET_CONTACT_DETAILS,
      payload: null,
    };

    expect(setContactDetails(null)).toEqual(expectedAction);
  });
});
