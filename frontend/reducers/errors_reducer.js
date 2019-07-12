import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import accountsErrorsReducer from './accounts_errors_reducer';
import contactsErrorsReducer from './contacts_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  accounts: accountsErrorsReducer,
  contacts: contactsErrorsReducer
});

export default errorsReducer;