import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Home from '../home/home';

describe('SearchBar Component test', () => {
  it('Renders search Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
