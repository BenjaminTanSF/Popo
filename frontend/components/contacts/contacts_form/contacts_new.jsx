import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      cell_number: '',
      company_id: null,
      owner_id: this.props.currentUser.id,
      owner_first_name: this.props.currentUser.first_name,
      owner_last_name: this.props.currentUser.last_name,
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.navigateToContacts = this.navigateToContacts.bind(this);
  }

  componentWillUnmount() {
    this.props.clearContactsErrors()
  }

  navigateToContacts() {
    this.props.history.push('/contacts');
  }

  update(field) {
    // debugger
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('contact[name]', this.state.name);
    formData.append('contact[email]', this.state.email);
    formData.append('contact[phone_number]', this.state.phone_number);
    formData.append('contact[cell_number]', this.state.cell_number);
    formData.append('contact[company_id]', parseInt(this.state.company_id));
    if (this.state.photoFile) {
      formData.append('contact[photo]', this.state.photoFile);
    }
    this.props.create(formData).then(res => this.navigateToContacts());
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
    console.log(this.state);
    const preview = this.state.photoUrl ? <div className="preview"><h6>Preview</h6><img className="previewPic" src={this.state.photoUrl} alt="" /></div> : null;
    return (
      <div className="createForm">
        <form onSubmit={this.handleSubmit} id="create">

          <div className="createFormHeader">
            <div className="span">
              <span>Create Contact</span>
            </div>
            <input type="submit" value="Create" id="submitBtn" />
          </div>
          {this.renderErrors()}

          <div className="formMain">
            <div className="contactInformation">
              <span>Contact Information</span>
            </div>

            <div className="formBody">
              <div className="createFormLeft">
                <label><span>Contact Owner</span>
                  <input type="text"
                    value={`${this.state.owner_first_name} ${this.state.owner_last_name}`}
                    disabled
                  />
                </label>
                <br />
                <label><span>Contact Name</span>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    placeholder="Name"
                  />
                </label>
                <br />
                <label><span>Email</span>
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                </label>
                <br />
                <label><span>Phone Number</span>
                  <input type="text"
                    value={this.state.phone_number}
                    onChange={this.update('phone_number')}
                    placeholder="Phone Number"
                  />
                </label>
                <br />
                <label><span>Cell Number</span>
                  <input type="text"
                    value={this.state.cell_number}
                    onChange={this.update('cell_number')}
                    placeholder="Cell Number"
                  />
                </label>
                <br />
              </div>

              <div className="createFormRight">
                <div>
                  <label><span>Company</span>
                    <select id="companySelect" onChange={this.update('company_id')}>
                      <option value="" selected>Please Select A Company</option>
                      {this.props.accountArr.map(account => {
                        return (<option key={account.id} value={account.id}>{account.name}</option>)
                      })}
                    </select>
                  </label>
                  <br />
                  <div className="box">
                    <input type="file" name="file-2[]" id="file-2" className="inputfile inputfile-2" data-multiple-caption="{count} files selected" multiple onChange={this.handleFile} />
                    <label htmlFor="file-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg>
                      <span>Upload Photo</span>
                    </label>
                  </div>
                  <br />
                  {preview}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateContactForm);
