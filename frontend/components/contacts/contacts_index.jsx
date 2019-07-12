import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactsIndexTR from './contacts_index_tr';
import LoadingIcon from '../loading_icon/loading_icon';

class ContactsIndex extends Component {
  componentDidMount() {
    this.props.index();
  }

  render() {
    const { contacts, loading } = this.props;

    if (loading) { return <LoadingIcon />; }
    else {
      return (
        <div className="contactsIndex">
          <div className="contactsHeader">
            <div className="allContacts">
              <span>All Contacts</span>
            </div>
            <Link to={"/contacts/new"}><span>+</span></Link>
          </div>
          <div className="contactsIndexTable">
            <table className="contactsTable">
              <thead>
                <tr id="contactsTableHead">
                  <th className="tableHeadContactName" id='contactName'>Contact Name</th>
                  <th className="tableHeadPhone" id='phone'>Phone</th>
                  <th className="tableHeadEmail" id='website'>Email</th>
                  <th className="tableHeadContactowner" id='contactOwner'>Contact Owner</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => <ContactsIndexTR key={contact.id} contact={contact} />)}
              </tbody>
            </table>
            <h6 className="contactsIndexCount">Total Count: {contacts.length}</h6>
          </div>
        </div>
      );
    }
  }
}

export default ContactsIndex;