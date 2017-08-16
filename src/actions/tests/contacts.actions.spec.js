import configureMockStore from 'redux-mock-store';
import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';
import nock from 'nock';

import { getContactsFromApi, getContactsSuccess, getContactsFailed, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE } from '../contacts.actions';
import { START_LOADING, STOP_LOADING } from '../loading.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const contact = {
  name: 'Miss Piggy',
  id: '13',
  companyName: 'Muppets, Baby',
  isFavorite: false,
  smallImageURL: 'https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg',
  largeImageURL: 'https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-large.jpg',
  emailAddress: 'Miss.Piggy@muppetsbaby.com',
  birthdate: '1987-05-11',
  phone: {
    work: '602-225-9543',
    home: '602-225-9188',
    mobile: '',
  },
  address: {
    street: '3530 E Washington St',
    city: 'Phoenix',
    state: 'AZ',
    country: 'US',
    zipCode: '85034',
  },
};

describe('contacts actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should add a list of contacts to the store', () => {
    const expectedAction = {
      type: GET_CONTACTS_SUCCESS,
      payload: [],
    };

    expect(getContactsSuccess([])).toEqual(expectedAction);
  });

  it('should clear contacts from store if error occurs', () => {
    const expectedAction = {
      type: GET_CONTACTS_FAILURE,
      payload: 'Error',
    };

    expect(getContactsFailed('Error')).toEqual(expectedAction);
  });

  it('should fetch contacts from a service and dispatch actions', () => {
    nock('https://s3.amazonaws.com')
      .get('/technical-challenge/v3/contacts.json')
      .reply(200, [contact]);

    const expectedSuccessActions = [
      { type: START_LOADING },
      { type: STOP_LOADING },
      { type: GET_CONTACTS_SUCCESS, payload: [contact] },
    ];

    const expectedFailureActions = [
      { type: START_LOADING },
      { type: STOP_LOADING },
      { type: GET_CONTACTS_FAILURE, payload: 'Error' },
    ];

    const store = mockStore({ contacts: [] });

    return store.dispatch(getContactsFromApi()).then(() => {
      expect(store.getActions()).toEqual(expectedSuccessActions);
    }).catch(() => expect(store.getActions()).toEqual(expectedFailureActions));
  });
});
