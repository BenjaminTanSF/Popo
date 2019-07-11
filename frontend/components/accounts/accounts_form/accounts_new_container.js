import React from 'react';
import { connect } from 'react-redux';
import { create, clearErrors } from '../../../actions/accounts_actions';
import CreateAccountForm from './accounts_new';

const mapStateToProps = ({ entities, errors, session }) => ({
  currentUser: entities.users[session.currentUserId],
  errors: errors.accounts
});

const mapDispatchToProps = dispatch => ({
  create: (account) => dispatch(create(account)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);
