import { connect } from 'react-redux';
import AccountsShow from './accounts_show';
import { show } from '../../actions/accounts_actions';

const mapStateToProps = (state, ownProps) => {
  const account = state.entities.accounts[ownProps.match.params.accountId];
  const currentUser = state.entities.users[state.session.currentUserId];
  return {
    account,
    currentUser,
    loading: state.ui.loading.loading
  };
};

const mapDispatchToProps = dispatch => ({
  show: id => dispatch(show(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsShow);
