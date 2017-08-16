import { startLoading, stopLoading, START_LOADING, STOP_LOADING } from '../loading.actions';

describe('loading actions', () => {
  it('should create an action to show the loading indicator', () => {
    const expectedAction = {
      type: START_LOADING,
    };

    expect(startLoading()).toEqual(expectedAction);
  });

  it('should create an action to hide the loading indicator', () => {
    const expectedAction = {
      type: STOP_LOADING,
    };

    expect(stopLoading()).toEqual(expectedAction);
  });
});
