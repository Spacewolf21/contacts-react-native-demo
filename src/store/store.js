import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    nav: null,
    contacts: [],
    contactDetails: null,
    error: null,
};

export default function getStore() {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk),
    );

    return store;
}
