import React from 'react';
import ReactDOM from 'react-dom';

//testing imports
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //testing
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;

  ReactDOM.render(<h1>Welcome to POPO CRM</h1>, root);
})