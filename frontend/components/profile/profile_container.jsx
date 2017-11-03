import { logout } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { createFriendship, deleteFriendship } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import About from './about';

const mapStateToProps = ({ session, users }, ownProps) => {
  return {
    currentUser: session.currentUser,
    user: users[ownProps.match.params.userId],
    friends: users.friends
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    createFriendship: friend => dispatch(createFriendship(friend)),
    deleteFriendship: id => dispatch(deleteFriendship(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
