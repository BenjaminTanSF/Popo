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
      photoFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[password]', this.state.password);
    formData.append('user[email]', this.state.email);
    formData.append('user[first_name]', this.state.first_name);
    formData.append('user[last_name]', this.state.last_name);
    formData.append('user[position]', this.state.position);
    formData.append('user[org_id]', this.state.org_id);
    formData.append('user[photo]', this.state.photoFile);
    this.props.signup(formData);
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({
      photoFile: e.currentTarget.files[0]
    })
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
      <div className="signupForm">
        <div className="signupFormLeft">
          <div className="testimonial">
            <span><img className="img-responsive" src={window.ncThumbnailURL} width="80" height="80" alt="" /></span>
            <p>
              "We have been working with Benjamin for more than 3 years and his service has always been very good. During this time, he has provided us with top notch software designs and proposals, some demonstrating a deep understanding of our business and our industry. He has a very efficient program management process, which guarantees the correct result. So would we use Benjamin again? Yes, of course!"
            </p>
            <p className="customerName">- Chief Executive Officer, Yunique, CANADA4ALL INC.</p>
          </div>
        </div>

        <div className="signupFormRight">
          <a href="/">
            <img className="img-responsive" src={window.iconHandshakeURL} width="48" height="48" />
            <span href="/crm/">CRM</span>
          </a>
          <h3>Start your Free Trial.</h3>
          <form onSubmit={this.handleSubmit} id="signup">
            {this.renderErrors()}
            <div>
              <br />
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              </label>
              <br />
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  placeholder="First Name"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  placeholder="Last Name"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.position}
                  onChange={this.update('position')}
                  placeholder="Position"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.org_id}
                  onChange={this.update('org_id')}
                  placeholder="Organization_id"
                />
              </label>
              <br />
              <input type="file" id="fileBtn" onChange={this.handleFile} />
              <br />
              <input type="submit" value="Sign Up" id="submitBtn" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
