import merge from 'lodash/merge';

import { RECEIVE_ALL_CONTACTS, RECEIVE_CURRENT_CONTACT, DESTROY_CURRENT_CONTACT } from '../actions/contacts_actions';

const contactsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_CONTACTS:
      nextState = action.contacts;
      return nextState;
    case RECEIVE_CURRENT_CONTACT:
      nextState = action.currentContact;
      return nextState;
    case DESTROY_CURRENT_CONTACT:
      delete nextState[action.currentContact.id];
      return nextState;
    default:
      return oldState;
  }
};

export default contactsReducer;