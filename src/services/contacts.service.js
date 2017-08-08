import { get } from './http';

export function getContacts() {
  return get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json');
}
