import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

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
    </Switch>
  </div>
);

export default App;