import React, { Component } from 'react';
import LoadingIcon from '../loading_icon/loading_icon';
import { Link } from 'react-router-dom';

class AccountsShow extends Component {
  componentDidMount() {
    this.props.show(this.props.match.params.accountId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.accountId !== this.props.match.params.accountId) {
      this.props.show(this.props.match.params.accountId);
    }
  }

  render() {
    const { account, currentUser, loading } = this.props;

    if (loading) { return <LoadingIcon />; }
    if (!account) return null;

    return (
      <div className="accountDetail">
        <div className="accountsHeader">
          <div className="leftArrow">
            <Link to={'/accounts'}>
              <img src={window.leftArrow} alt="left arrow" width="20" height="20" />
            </Link>
          </div>
          <div className="logoDiv">
            <img className="img-responsive"
              src={account.logoUrl}
              alt="logo" width="50" height="50" />
          </div>
          <div className="website">
            <a href={account.website}>{account.website}</a>
          </div>
          <div className="editBtn">
            <Link to={`/accounts/${account.id}/edit`}>Edit</Link>
          </div>
        </div>
        <div className="accountDetailTableDiv">
          <div className="accountInformation">
            <span>Account Information</span>
          </div>
          <table className="accountDetailTable">
            <tbody>
              <tr className="owner">
                <td>
                  <span className="grey">Account Owner</span>
                </td>
                <td>
                  <span>{account.first_name} {account.last_name}</span>
                </td>
              </tr>
              <tr className="supervisor">
                <td>
                  <span className="grey">Account Supervisor</span>
                </td>
                <td>
                  <span>{currentUser.first_name} {currentUser.last_name}</span>
                </td>
              </tr>
              <tr className="name">
                <td>
                  <span className="grey">Account Name</span>
                </td>
                <td>
                  <span>{account.name}</span>
                </td>
              </tr>
              <tr className="ownership">
                <td>
                  <span className="grey">Ownership</span>
                </td>
                <td>
                  <span>{account.ownership}</span>
                </td>
              </tr>
              <tr className="industry">
                <td>
                  <span className="grey">Indistry</span>
                </td>
                <td>
                  <span>{account.industry}</span>
                </td>
              </tr>
              <tr className="annualRev">
                <td>
                  <span className="grey">Annual Revenue</span>
                </td>
                <td>
                  <span>$ {account.annual_revenue_mil} Millions</span>
                </td>
              </tr>
              <tr className="phone">
                <td>
                  <span className="grey">Phone</span>
                </td>
                <td>
                  <span>📞 {account.phone_number}</span>
                </td>
              </tr>
              <tr className="employees">
                <td>
                  <span className="grey">Employees</span>
                </td>
                <td>
                  <span>{account.employees}</span>
                </td>
              </tr>
              <tr className="website">
                <td>
                  <span className="grey">Website</span>
                </td>
                <td>
                  <span>{account.website}</span>
                </td>
              </tr>
              <tr className="sic_code">
                <td>
                  <span className="grey">SIC Code</span>
                </td>
                <td>
                  <span>{account.sic_code}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AccountsShow;
