import Navigator from '../app/navigation';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Contacts'));

export default (state = initialState, action) => {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};
