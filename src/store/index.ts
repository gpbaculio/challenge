import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import users from './users/reducers';

const rootReducer = combineReducers({
  users
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
