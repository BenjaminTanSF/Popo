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
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  // componentDidMount() {
  //   this.props.index();
  // }

  componentWillUnmount() {
    this.props.clearErrors();
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
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    this.props.signup(formData);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
    const preview = this.state.photoUrl ? <div className="preview"><h6>Preview</h6><img className="previewPic" src={this.state.photoUrl} alt="" /></div> : null;
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
                <input type="email"
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
              <div className="box">
                <input type="file" name="file-2[]" id="file-2" className="inputfile inputfile-2" data-multiple-caption="{count} files selected" multiple onChange={this.handleFile} />
                <label htmlFor="file-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg>
                  <span>Profile Pic</span>
                </label>
              </div>
              <br />
              {preview}
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
