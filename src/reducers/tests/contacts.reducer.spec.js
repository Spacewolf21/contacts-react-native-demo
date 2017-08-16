import { getContactsFailed, getContactsSuccess } from '../../actions/contacts.actions';
import reducer from '../contacts.reducer';

const contacts = [
  {
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
  },
];

describe('contacts reducer', () => {
  it('should add a list of contacts to the state', () => {
    const action = getContactsSuccess(contacts);
    const state = [];

    expect(reducer(state, action)).toEqual(contacts);
  });

  it('should clear contacts from the state', () => {
    const action = getContactsFailed('Bad things happened');
    const state = contacts;

    expect(reducer(state, action)).toEqual([]);
  });
});
