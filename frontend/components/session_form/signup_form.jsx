import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      position: '',
      org_id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    return (
      <ul>
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
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div>
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br />
            <label>First Name:
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
              />
            </label>
            <label>Last Name:
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
              />
            </label>
            <br />
            <label>Position:
              <input type="text"
                value={this.state.position}
                onChange={this.update('position')}
              />
            </label>
            <br />
            <label>Org_id:
              <input type="text"
                value={this.state.org_id}
                onChange={this.update('org_id')}
              />
            </label>
            <br />
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
