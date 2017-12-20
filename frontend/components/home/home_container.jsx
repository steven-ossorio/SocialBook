import { logout } from '../../actions/session_actions';
import { fetchUser, fetchNewsFeed } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Home from './home';

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
    fetchNewsFeed: () => dispatch(fetchNewsFeed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
