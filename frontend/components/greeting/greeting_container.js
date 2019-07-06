import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

export default connect(mapStateToProps)(Greeting);
