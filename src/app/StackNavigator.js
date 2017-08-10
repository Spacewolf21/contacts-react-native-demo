import { StackNavigator } from 'react-navigation';

import Contacts from '../containers/Contacts';
import ContactDetails from '../containers/ContactDetails';

export default StackNavigator({
  Contacts: { screen: Contacts, navigationOptions: { title: 'Contacts' } },
  ContactDetails: { screen: ContactDetails, navigationOptions: { title: 'Details' } },
});
