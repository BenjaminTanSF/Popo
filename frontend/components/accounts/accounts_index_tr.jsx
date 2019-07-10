import React from 'react';
import { Link } from 'react-router-dom';

const AccountsListItem = ({ account }) => (
  <tr>
    <td className="tableHeadAccountName">
      <Link to={`/account/${account.id}`}>
        <img className="img-responsive"
          src={account.logoUrl}
          alt="" width="33" height="33" />
      </Link>
      <Link to={`/account/${account.id}`}>
        {account.name}
      </Link>
    </td>
    <td className="tableHeadPhone">
      <span>
        {account.phone_number}
      </span>
    </td>
    <td className="tableHeadWebsite">
      <span>
        {account.website}
      </span>
    </td>
    <td className="tableHeadAccountowner">
      <span>
        {account.first_name} {account.last_name}
      </span>
    </td>
  </tr>
);

export default AccountsListItem;
