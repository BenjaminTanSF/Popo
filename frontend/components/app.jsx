import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import accountsIndexContainer from './accounts/accounts_index_container';
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
      <ProtectedRoute exact path="/accounts" component={accountsIndexContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
    <Footer />
  </div>
);

export default App;