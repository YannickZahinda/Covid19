import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../../app/store';
import Info from '../info/info';

describe('info Component test', () => {
  it('Renders Info link', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Info />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
