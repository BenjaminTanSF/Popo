import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState = {};
      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;