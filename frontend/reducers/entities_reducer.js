import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import accountsReducer from './accounts_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  accounts: accountsReducer
});

export default entitiesReducer;