import merge from 'lodash/merge';

import { RECEIVE_ALL_ACCOUNTS, RECEIVE_CURRENT_ACCOUNT, CLEAR_ALL_ACCOUNTS, CLEAR_SINGLE_ACCOUNT, DESTROY_CURRENT_ACCOUNT } from '../actions/accounts_actions';

const accountsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_ACCOUNTS:
      nextState = action.accounts;
      return nextState;
    case RECEIVE_CURRENT_ACCOUNT:
      nextState = action.currentAccount;
      return nextState;
    case CLEAR_ALL_ACCOUNTS:
      return {};
    case CLEAR_SINGLE_ACCOUNT:
      return {};
    case DESTROY_CURRENT_ACCOUNT:
      delete nextState[action.currentAccount.id];
      return nextState;
    default:
      return oldState;
  }
};

export default accountsReducer;