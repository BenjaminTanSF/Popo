import React from 'react';
import { connect } from 'react-redux';
import { update, clearContactsErrors } from '../../../actions/contacts_actions';
import EditContactForm from './contacts_edit';

const mapStateToProps = (state, ownProps) => ({
  contact: state.entities.contacts[ownProps.match.params.contactId],
  accountArr: Object.values(state.entities.accounts),
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.contacts
});

const mapDispatchToProps = dispatch => ({
  update: (contact, id) => dispatch(update(contact, id)),
  clearContactsErrors: () => dispatch(clearContactsErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContactForm);
