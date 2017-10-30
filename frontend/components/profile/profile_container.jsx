import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import About from './about';

const mapStateToProps = ({ session, users }) => {
  console.log(session);
  return {
    currentUser: session.currentUser,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
