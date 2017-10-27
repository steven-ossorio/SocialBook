import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import About from './about';

const mapStateToProps = ({ session }) => {
  console.log(session.currentUser.posts)
  return {
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
