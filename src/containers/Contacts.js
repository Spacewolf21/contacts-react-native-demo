import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getContactsFromApi } from '../actions/contacts.actions';
import { setContactDetails } from '../actions/contact-details.actions';
import ContactList from '../components/ContactList';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
    this.contactTapped = this.contactTapped.bind(this);
  }

  componentDidMount() {
    this.props.getContacts();
  }

  contactTapped(contact) {
    this.props.setContact(contact);
    this.props.navigation.navigate('ContactDetails');
  }

  renderContent() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" />;
    }

    return <ContactList contacts={this.props.contacts} contactTapped={this.contactTapped} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.renderContent() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatchAction) => {
  return {
      getContacts: () => dispatchAction(getContactsFromApi()),
      setContact: contact => dispatchAction(setContactDetails(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  navigation: PropTypes.object,
  getContacts: PropTypes.func,
  setContact: PropTypes.func,
};

Contacts.defaultProps = {
  contacts: [],
  loading: false,
  navigation: null,
  getContacts: null,
  setContact: null,
};

