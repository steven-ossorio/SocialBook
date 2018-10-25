import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignUpForm from "./signup_form";

const mapStateToProps = state => {
  let errors = state.errors ? state.errors.session : {};
  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
