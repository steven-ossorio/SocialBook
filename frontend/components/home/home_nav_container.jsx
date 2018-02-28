import { logout } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { createFriendship, deleteFriendship, updateFriendship } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomeNav from './home_nav';

const mapStateToProps = ({ session, users, friends }, ownProps) => {
  return {
    currentUser: session.currentUser,
    user: users[session.currentUser.id],
    requests: friends.requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    createFriendship: friend => dispatch(createFriendship(friend)),
    deleteFriendship: id => dispatch(deleteFriendship(id)),
    updateFriendship: id => dispatch(updateFriendship(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNav));
