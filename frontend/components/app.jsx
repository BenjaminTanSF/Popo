import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import accountsIndexContainer from './accounts/accounts_index_container';
import accountsShowContainer from './accounts/accounts_show_container';
import accountsEditContainer from './accounts/accounts_form/accounts_edit_container';
import accountsNewContainer from './accounts/accounts_form/accounts_new_container'
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
      <ProtectedRoute exact path="/accounts/new" component={accountsNewContainer} />
      <ProtectedRoute exact path="/accounts/:accountId/edit" component={accountsEditContainer} />
      <ProtectedRoute exact path="/accounts/:accountId" component={accountsShowContainer} />
      <ProtectedRoute exact path="/accounts" component={accountsIndexContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
    <Footer />
  </div>
);

export default App;