import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Link, Switch } from 'react-router-dom';
import { AuthRoute } from './util/route_util';

const App = () => (
  <div>
    <Link to="/">
      <h1>If you see this, you're on the top of the world.</h1>
    </Link>
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;