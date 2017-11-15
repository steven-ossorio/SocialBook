import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => {
  let user = null;
  let posts;

  if (state.posts !== null) {
    posts = state.posts;
  }
  if (state.session.currentUser) {
    user = state.users[state.session.currentUser.id];
    posts = state.posts;
  }



  return {
    currentUser: state.session.currentUser,
    user,
    posts
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
)(Home);
