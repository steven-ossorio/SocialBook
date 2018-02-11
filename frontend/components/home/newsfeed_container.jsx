import { logout } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { createFriendship, deleteFriendship, updateFriendship } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewsFeed from './newsfeed';

const mapStateToProps = (state) => {
  let user = null;
  let posts;
  let newsfeed;

  if (state.posts !== null) {
    posts = state.posts;
  }
  if (state.session.currentUser) {
    user = state.users[state.session.currentUser.id];
    posts = state.posts;
    newsfeed = state.users.newsfeed;
  }



  return {
    currentUser: state.session.currentUser,
    user,
    posts,
    newsfeed
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
)(NewsFeed));
