import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import AccountsIndexContainer from './accounts/accounts_index_container';
import AccountsShowContainer from './accounts/accounts_show_container';
import AccountsEditContainer from './accounts/accounts_form/accounts_edit_container';
import AccountsNewContainer from './accounts/accounts_form/accounts_new_container';
import ContactsIndexContainer from './contacts/contacts_index_container';
import ContactsShowContainer from './contacts/contacts_show_container';
import ContactsNewContainer from './contacts/contacts_form/contacts_new_container';
import ContactsEditContainer from './contacts/contacts_form/contacts_edit_container';
import Splash from './splash/splash';
import Footer from './footer/footer';

//testing
import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Modal />
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/accounts/new" component={AccountsNewContainer} />
      <ProtectedRoute exact path="/accounts/:accountId/edit" component={AccountsEditContainer} />
      <ProtectedRoute exact path="/accounts/:accountId" component={AccountsShowContainer} />
      <ProtectedRoute exact path="/accounts" component={AccountsIndexContainer} />
      <ProtectedRoute exact path="/contacts/new" component={ContactsNewContainer} />
      <ProtectedRoute exact path="/contacts/:contactId/edit" component={ContactsEditContainer} />
      <ProtectedRoute exact path="/contacts/:contactId" component={ContactsShowContainer} />
      <ProtectedRoute exact path="/contacts" component={ContactsIndexContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
    <Footer />
  </div>
);

export default App;