import React, { Component } from 'react';
import LoadingIcon from '../loading_icon/loading_icon';
import { Link } from 'react-router-dom';

class ContactsShow extends Component {
  componentDidMount() {
    this.props.show(this.props.match.params.contactId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.contactId !== this.props.match.params.contactId) {
      this.props.show(this.props.match.params.contactId);
    }
  }

  render() {
    const { contact, currentUser, loading } = this.props;

    if (loading) { return <LoadingIcon />; }
    if (!contact) return null;

    return (
      <div className="contactDetail">
        <div className="contactsHeader">
          <div className="leftArrow">
            <Link to={'/contacts'}>
              <img src={window.leftArrow} alt="left arrow" width="20" height="20" />
            </Link>
          </div>
          <div className="photoDiv">
            <img className="img-responsive"
              src={contact.photoUrl}
              alt="photo" width="50" height="50" />
          </div>
          <div className="fullName">
            <span>{contact.name}</span>
          </div>
          <div className="editBtn">
            <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
          </div>
        </div>

        <div className="contactDetailTableDiv">
          <div className="contactInformation">
            <span>Contact Information</span>
          </div>
          <table className="contactDetailTable">
            <tbody>
              <tr className="owner">
                <td>
                  <span className="grey">Contact Owner</span>
                </td>
                <td>
                  <span>{contact.owner_first_name} {contact.owner_last_name}</span>
                </td>
              </tr>
              <tr className="supervisor">
                <td>
                  <span className="grey">Contact Supervisor</span>
                </td>
                <td>
                  <span>{currentUser.first_name} {currentUser.last_name}</span>
                </td>
              </tr>
              <tr className="email">
                <td>
                  <span className="grey">Email</span>
                </td>
                <td>
                  <span>📧 {contact.email}</span>
                </td>
              </tr>
              <tr className="phone">
                <td>
                  <span className="grey">Phone</span>
                </td>
                <td>
                  <span>📞 {contact.phone_number}</span>
                </td>
              </tr>
              <tr className="cell_number">
                <td>
                  <span className="grey">Cell</span>
                </td>
                <td>
                  <span>📱 {contact.cell_number}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactsShow;
