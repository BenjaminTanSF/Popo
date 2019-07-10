import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing imports
import { signup, login, logout } from './actions/session_actions';
import { index, create, show, update, destroy, clearErrors } from './actions/accounts_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUserId: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.clearErrors = clearErrors;
  // testing accounts
  window.index = index;
  window.create = create;
  window.show = show;
  window.update = update;
  window.destroy = destroy;

  ReactDOM.render(<Root store={store} />, root);
})