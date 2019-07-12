import { RECEIVE_CONTACTS_ERRORS, RECEIVE_CURRENT_CONTACT, RECEIVE_ALL_CONTACTS, CLEAR_CONTACTS_ERRORS } from '../actions/contacts_actions';

const contactsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTACTS_ERRORS:
      return action.errors;
    case RECEIVE_ALL_CONTACTS:
      return [];
    case RECEIVE_CURRENT_CONTACT:
      return [];
    case CLEAR_CONTACTS_ERRORS:
      return [];
    default:
      return state;
  }
};

export default contactsErrorsReducer;