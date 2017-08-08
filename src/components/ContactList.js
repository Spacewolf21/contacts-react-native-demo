import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, contactTapped }) {
  function renderContact(contact) {
    return <ContactListItem contact={contact} contactTapped={contactTapped} />;
  }

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => renderContact(item)}
      keyExtractor={contact => contact.id}
    />
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  contactTapped: PropTypes.func,
};

ContactList.defaultProps = {
  contacts: [],
  contactTapped: null,
};
