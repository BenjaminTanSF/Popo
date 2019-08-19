import * as APIUtil from '../util/contacts_api_util';

export const RECEIVE_ALL_CONTACTS = 'RECEIVE_ALL_CONTACTS';
export const RECEIVE_CURRENT_CONTACT = 'RECEIVE_CURRENT_CONTACT';
export const START_LOADING_ALL_CONTACTS = 'START_LOADING_ALL_CONTACTS';
export const START_LOADING_SINGLE_CONTACT = 'START_LOADING_SINGLE_CONTACT';
export const CLEAR_ALL_CONTACTS = 'CLEAR_ALL_CONTACTS';
export const CLEAR_SINGLE_CONTACT = 'CLEAR_SINGLE_CONTACT';
export const DESTROY_CURRENT_CONTACT = 'DESTROY_CURRENT_CONTACT';
export const RECEIVE_CONTACTS_ERRORS = 'RECEIVE_CONTACTS_ERRORS';
export const CLEAR_CONTACTS_ERRORS = 'CLEAR_CONTACTS_ERRORS';

export const startLoadingAllContacts = () => ({
  type: START_LOADING_ALL_CONTACTS
});

export const startLoadingSingleContact = () => ({
  type: START_LOADING_SINGLE_CONTACT
});

export const clearAllContacts = () => ({
  type: CLEAR_ALL_CONTACTS
});

export const clearSingleContact = () => ({
  type: CLEAR_SINGLE_CONTACT
});

export const receiveAllContacts = contacts => ({
  type: RECEIVE_ALL_CONTACTS,
  contacts
});

export const receiveCurrentContact = currentContact => ({
  type: RECEIVE_CURRENT_CONTACT,
  currentContact
});

export const destroyCurrentContact = currentContact => ({
  type: DESTROY_CURRENT_CONTACT,
  currentContact
});

export const receiveErrors = errors => ({
  type: RECEIVE_CONTACTS_ERRORS,
  errors
});

export const clearContactsErrors = () => ({
  type: CLEAR_CONTACTS_ERRORS
});

export const index = () => dispatch => {
  dispatch(startLoadingAllContacts());
  return APIUtil.index()
    .then(
      contacts => { dispatch(receiveAllContacts(contacts)) },
      err => { dispatch(receiveErrors(err.responseJSON)) }
    )
};

export const create = contact => dispatch => (
  APIUtil.create(contact).then(
    contact => (dispatch(receiveCurrentContact(contact))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const show = id => dispatch => {
  dispatch(startLoadingSingleContact())
  return APIUtil.show(id).then(
    contact => (dispatch(receiveCurrentContact(contact))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
};

export const update = (contact, id) => dispatch => (
  APIUtil.update(contact, id).then(
    contact => (dispatch(receiveCurrentContact(contact))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);
// Front end - in constructor, do this.state = this.props.contact => get this.state.id and pass it as 2nd arg

export const destroy = id => dispatch => (
  APIUtil.destroy(id).then(currentContact => (dispatch(destroyCurrentContact(currentContact))))
);
