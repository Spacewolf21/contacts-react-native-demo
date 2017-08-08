import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: 'black',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    backgroundColor: '#F8F8F8',
  },
});

export default function ContactListItem({ contact, contactTapped }) {
  const { container, image, text } = styles;
  return (
    <TouchableOpacity onPress={() => contactTapped(contact)}>
      <View style={container}>
          <Image
            style={image}
            source={{ uri: contact.smallImageURL }}
          />
          <Text style={text}>{ contact.name }</Text>
      </View>
    </TouchableOpacity>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
  contactTapped: PropTypes.func,
};

ContactListItem.defaultProps = {
  contact: {},
  contactTapped: null,
};
