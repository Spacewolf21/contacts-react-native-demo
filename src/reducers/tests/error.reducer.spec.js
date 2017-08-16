import { getContactsFailed } from '../../actions/contacts.actions';
import reducer from '../error.reducer';

describe('error reducer', () => {
  it('should add an error to the state', () => {
    const errorText = 'Unable to get contacts';
    const action = getContactsFailed(errorText);
    const state = null;

    expect(reducer(state, action)).toEqual(errorText);
  });
});
