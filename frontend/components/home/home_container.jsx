import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.currentUser
  };
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
