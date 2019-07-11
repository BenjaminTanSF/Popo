import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      website: '',
      phone_number: '',
      industry: '',
      employees: '',
      ein: '',
      catch_phrase: '',
      ownership: '',
      is_org: false,
      annual_revenue_mil: null,
      sic_code: null,
      owner_id: this.props.currentUser.id,
      owner_first_name: this.props.currentUser.first_name,
      owner_last_name: this.props.currentUser.last_name,
      logoFile: null,
      logoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  navigateToIndex() {
    this.props.history.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('account[name]', this.state.name);
    formData.append('account[website]', this.state.website);
    formData.append('account[phone_number]', this.state.phone_number);
    formData.append('account[industry]', this.state.industry);
    formData.append('account[employees]', this.state.employees);
    formData.append('account[ein]', this.state.ein);
    formData.append('account[catch_phrase]', this.state.catch_phrase);
    formData.append('account[ownership]', this.state.ownership);
    formData.append('account[is_org]', this.state.is_org);
    formData.append('account[annual_revenue_mil]', this.state.annual_revenue_mil);
    formData.append('account[sic_code]', this.state.sic_code);
    formData.append('account[owner_id]', this.state.owner_id);
    if (this.state.logoFile) {
      formData.append('account[logo]', this.state.logoFile);
    }
    this.props.create(formData).then(res => this.navigateToIndex());
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        logoFile: file,
        logoUrl: fileReader.result
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
    const preview = this.state.logoUrl ? <div className="preview"><h6>Preview</h6><img className="previewPic" src={this.state.logoUrl} alt="" /></div> : null;
    return (
      <div className="createForm">
        <form onSubmit={this.handleSubmit} id="create">

          <div className="createFormHeader">
            <div className="span">
              <span>Create Account</span>
            </div>
            <input type="submit" value="Create" id="submitBtn" />
          </div>
          {this.renderErrors()}

          <div className="formMain">
            <div className="accountInformation">
              <span>Account Information</span>
            </div>

            <div className="formBody">
              <div className="createFormLeft">
                <label><span>Account Owner</span>
                  <input type="text"
                    value={`${this.state.owner_first_name} ${this.state.owner_last_name}`}
                    disabled
                  />
                </label>
                <br />
                <label><span>Account Name</span>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    placeholder="Name"
                  />
                </label>
                <br />
                <label><span>Website</span>
                  <input type="text"
                    value={this.state.website}
                    onChange={this.update('website')}
                    placeholder="Website"
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
                <label><span>Industry</span>
                  <input type="text"
                    value={this.state.industry}
                    onChange={this.update('industry')}
                    placeholder="Industry"
                  />
                </label>
                <br />
                <label><span>Employees</span>
                  <input type="text"
                    value={this.state.employees}
                    onChange={this.update('employees')}
                    placeholder="Employees"
                  />
                </label>
                <br />
              </div>

              <div className="createFormRight">
                <div>
                  <label><span>EIN</span>
                    <input type="text"
                      value={this.state.ein}
                      onChange={this.update('ein')}
                      placeholder="EIN"
                    />
                  </label>
                  <br />
                  <label><span>Catch Phrase</span>
                    <input type="text"
                      value={this.state.catch_phrase}
                      onChange={this.update('catch_phrase')}
                      placeholder="Catch Phrase"
                    />
                  </label>
                  <br />
                  <label><span>Ownership</span>
                    <input type="text"
                      value={this.state.ownership}
                      onChange={this.update('ownership')}
                      placeholder="Ownership"
                    />
                  </label>
                  <br />
                  <label><span>Annual Revenue</span>
                    <input type="number"
                      value={this.state.annual_revenue_mil}
                      onChange={this.update('annual_revenue_mil')}
                      placeholder="Annual Revenue"
                    /> Millions
              </label>
                  <br />
                  <label><span>SIC Code</span>
                    <input type="text"
                      value={this.state.sic_code}
                      onChange={this.update('sic_code')}
                      placeholder="SIC Code"
                    />
                  </label>
                  <br />
                  <div className="box">
                    <input type="file" name="file-2[]" id="file-2" className="inputfile inputfile-2" data-multiple-caption="{count} files selected" multiple onChange={this.handleFile} />
                    <label htmlFor="file-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg>
                      <span>Upload LOGO</span>
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

export default withRouter(CreateAccountForm);
