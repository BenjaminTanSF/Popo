import React, { Component } from 'react';
import AccountsIndexTR from './accounts_index_tr';
import LoadingIcon from '../loading_icon/loading_icon';

class AccountsIndex extends Component {
  componentDidMount() {
    this.props.index();
  }

  render() {
    const { accounts, loading } = this.props;

    if (loading) { return <LoadingIcon />; }
    else {
      return (
        <div className="accountsIndex">
          <table className="accountsTable">
            <thead>
              <tr id="accountsTableHead">
                <th className="tableHeadAccountName" id='accountName'>Account Name</th>
                <th className="tableHeadPhone" id='phone'>Phone</th>
                <th className="tableHeadWebsite" id='website'>Website</th>
                <th className="tableHeadAccountowner" id='accountOwner'>Account Owner</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map(account => <AccountsIndexTR key={account.id} account={account} />)}
            </tbody>
          </table>
          <h6 className="accountsIndexCount">Total Count: {accounts.length}</h6>
        </div>
      );
    }
  }
}

export default AccountsIndex;