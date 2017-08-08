import { combineReducers } from 'redux';

import NavigationReducer from './navigation.reducer';
import ContactsReducer from './contacts.reducer';
import ContactDetailsReducer from './contact-details.reducer';
import ErrorReducer from './error.reducer';
import LoadingReducer from './loading.reducer';

export default combineReducers({
  nav: NavigationReducer,
  contacts: ContactsReducer,
  contactDetails: ContactDetailsReducer,
  error: ErrorReducer,
  loading: LoadingReducer,
});
