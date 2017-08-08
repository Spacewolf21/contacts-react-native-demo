import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});

function ContactDetails({ contactDetails }) {
  const { image, container } = styles;

  return (
    <View style={container}>
        <Image
          style={image}
          source={{ uri: contactDetails.largeImageURL }}
        />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    contactDetails: state.contactDetails,
  };
};

export default connect(mapStateToProps)(ContactDetails);

ContactDetails.propTypes = {
  contactDetails: PropTypes.object,
};

ContactDetails.defaultProps = {
  contactDetails: null,
};

