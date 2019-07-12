import React from 'react';
import { Link } from 'react-router-dom';

const ContactsListItem = ({ contact }) => (
  <tr>
    <td className="tableHeadContactName">
      <Link to={`/contacts/${contact.id}`}>
        {contact.name}
      </Link>
    </td>
    <td className="tableHeadPhone">
      <span>
        {contact.phone_number}
      </span>
    </td>
    <td className="tableHeadEmail">
      <span>
        {contact.email}
      </span>
    </td>
    <td className="tableHeadContactowner">
      <span>
        {contact.owner_first_name} {contact.owner_last_name}
      </span>
    </td>
  </tr>
);

export default ContactsListItem;
