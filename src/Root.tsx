import React, { StatelessComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const Root: StatelessComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
