import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  async demoLogin(e) {
    e.preventDefault();

    const demoUser = {
      username: 'demoawesomeanimation',
      password: 'passwordpassword'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('usernameInput').focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      this.setState({ username: demoUser.username.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('passwordInput').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('submitBtn').click();
    document.getElementById('passwordInput').blur();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    return (
      <ul className="errorMsg">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="loginForm">
        <div className="title">Sign In to access CRM</div>
        <form onSubmit={this.handleSubmit} id="login">
          {this.renderErrors()}
          <div>
            <br />
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                id="usernameInput"
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                id="passwordInput"
              />
            </label>
            <br />
            <input type="submit" value="Sign In" id="submitBtn" />
            <input type="button" value="Demo" id="demoLogin" onClick={this.demoLogin} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
