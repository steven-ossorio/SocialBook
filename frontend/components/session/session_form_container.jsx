import { login } from '../../actions/session_actions';
import { connect } from  'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  console.log(state);
    console.log(state);
    return {
      loggedIn: Boolean(state.session.currentUser),
      errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
      login: user => dispatch(login(user))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
