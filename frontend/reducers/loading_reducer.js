import {
  RECEIVE_ALL_ACCOUNTS,
  RECEIVE_CURRENT_ACCOUNT,
  RECEIVE_ACCOUNTS_ERRORS,
  START_LOADING_ALL_ACCOUNTS,
  DESTROY_CURRENT_ACCOUNT,
  START_LOADING_SINGLE_ACCOUNT,
  CLEAR_ERRORS
} from '../actions/accounts_actions';
import {
  RECEIVE_ALL_CONTACTS,
  RECEIVE_CURRENT_CONTACT,
  RECEIVE_CONTACTS_ERRORS,
  START_LOADING_ALL_CONTACTS,
  DESTROY_CURRENT_CONTACT,
  START_LOADING_SINGLE_CONTACT,
  CLEAR_CONTACTS_ERRORS
} from '../actions/contacts_actions';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ACCOUNTS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_CURRENT_ACCOUNT:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ACCOUNTS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case DESTROY_CURRENT_ACCOUNT:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ALL_CONTACTS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_CURRENT_CONTACT:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_CONTACTS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case DESTROY_CURRENT_CONTACT:
      return Object.assign({}, state, { loading: false });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { loading: false });
    case CLEAR_CONTACTS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case START_LOADING_ALL_ACCOUNTS:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_SINGLE_ACCOUNT:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_ALL_CONTACTS:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_SINGLE_CONTACT:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default loadingReducer;
