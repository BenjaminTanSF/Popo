import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { index } from '../../actions/accounts_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ entities: { accounts }, errors }) => ({
  // TODO: need to create a new route and new controller action to get all accounts no matter what
  // orgs: Object.values(accounts).filter(account => account.is_org === true), //return an array
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  // index: () => dispatch(index()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
