import Contact from '../contact.model';

const data = {
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

describe('a contact model', () => {
  it('should create a contact model', () => {
    const contact = Contact(data);
    expect(contact.id).toEqual(data.id);
    expect(contact.name).toEqual(data.name);
    expect(contact.isFavorite).toEqual(data.isFavorite);
    expect(contact.smallImageURL).toEqual(data.smallImageURL);
    expect(contact.largeImageURL).toEqual(data.largeImageURL);
    expect(contact.emailAddress).toEqual(data.emailAddress);
    expect(contact.birthdate).toEqual(data.birthdate);
    expect(contact.phone).toEqual(data.phone);
    expect(contact.address).toEqual(data.address);
  });
});
