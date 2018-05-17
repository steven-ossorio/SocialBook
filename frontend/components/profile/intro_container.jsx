import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Intro from './intro';

const mapStateToProps = (state, ownProps) => {
  let user;
  if (state.users) {
    user = state.users[ownProps.match.params.userId];
  }
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro));
