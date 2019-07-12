import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import accountsReducer from './accounts_reducer';
import contactsReducer from './contacts_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  accounts: accountsReducer,
  contacts: contactsReducer,
});

export default entitiesReducer;