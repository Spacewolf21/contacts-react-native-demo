import React from 'react';
import { Provider } from 'react-redux';

import getStore from '../store/store';
import AppNavigator from './AppNavigator';

export default function AppRoot() {
  return (
    <Provider store={getStore()}>
      <AppNavigator />
    </Provider>
  );
}
