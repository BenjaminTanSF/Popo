import React from 'react';
import { connect } from 'react-redux';
import { create, clearContactsErrors } from '../../../actions/contacts_actions';
import CreateContactForm from './contacts_new';

const mapStateToProps = ({ entities, errors, session }) => ({
  accountArr: Object.values(entities.accounts),
  currentUser: entities.users[session.currentUserId],
  errors: errors.contacts
});

const mapDispatchToProps = dispatch => ({
  create: (contact) => dispatch(create(contact)),
  clearContactsErrors: () => dispatch(clearContactsErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContactForm);
