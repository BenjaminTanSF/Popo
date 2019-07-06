import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProfileMenu from './profile_menu';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
