import { connect } from 'react-redux';
import ContactsShow from './contacts_show';
import { show } from '../../actions/contacts_actions';

const mapStateToProps = (state, ownProps) => {
  const contact = state.entities.contacts[ownProps.match.params.contactId];
  const currentUser = state.entities.users[state.session.currentUserId];
  return {
    contact,
    currentUser,
    loading: state.ui.loading.loading
  };
};

const mapDispatchToProps = dispatch => ({
  show: id => dispatch(show(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsShow);
