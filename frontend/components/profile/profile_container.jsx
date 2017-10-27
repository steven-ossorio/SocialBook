import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session }) => {
  console.log(session.currentUser)
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
