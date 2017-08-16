import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';

describe('<ContactListItem />', () => {
  it('should render an item', () => {
    const instance = ReactTestRenderer.create(
      <TouchableOpacity>
        <View>
            <Image />
            <Text>Hello</Text>
        </View>
      </TouchableOpacity>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
