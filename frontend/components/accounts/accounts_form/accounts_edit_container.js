import React from 'react';
import { connect } from 'react-redux';
import { update, clearErrors } from '../../../actions/accounts_actions';
import EditAccountForm from './accounts_edit';

const mapStateToProps = (state, ownProps) => ({
  account: state.entities.accounts[ownProps.match.params.accountId],
  currentUser: state.entities.users[state.session.currentUserId],
  loading: state.ui.loading.loading,
  errors: state.errors.accounts
});

const mapDispatchToProps = dispatch => ({
  update: (account, id) => dispatch(update(account, id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountForm);
