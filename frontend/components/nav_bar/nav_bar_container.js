import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users }, ui: { modal } }) => {
  return {
    currentUser: users[session.currentUserId],
    modalState: modal
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
