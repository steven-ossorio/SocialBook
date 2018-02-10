import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Friends from './friends';

const mapStateToProps = ({ users }) => {
  return {
    friends: users.friends
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends));
