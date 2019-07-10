import { RECEIVE_ACCOUNTS_ERRORS, RECEIVE_CURRENT_ACCOUNT, RECEIVE_ALL_ACCOUNTS, CLEAR_ERRORS } from '../actions/accounts_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACCOUNTS_ERRORS:
      return action.errors;
    case RECEIVE_ALL_ACCOUNTS:
      return [];
    case RECEIVE_CURRENT_ACCOUNT:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;