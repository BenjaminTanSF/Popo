import merge from 'lodash/merge';

import { RECEIVE_ALL_ACCOUNTS, RECEIVE_CURRENT_ACCOUNT, DESTROY_CURRENT_ACCOUNT } from '../actions/accounts_actions';

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
    case DESTROY_CURRENT_ACCOUNT:
      delete nextState[action.currentAccount.id];
      return nextState;
    default:
      return oldState;
  }
};

export default accountsReducer;