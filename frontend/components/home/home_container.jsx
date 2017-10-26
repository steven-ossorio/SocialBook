import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Home from './home';

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
)(Home);
