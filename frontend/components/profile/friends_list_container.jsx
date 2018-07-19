import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FriendsList from "./friends_list";

const mapStateToProps = (state, ownProps) => {
  let friendIds;

  if (state.users[ownProps.match.params.userId] !== undefined) {
    friendIds = state.users[ownProps.match.params.userId];
  }
  return {
    friends: state.users.friends,
    friendIds
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendsList)
);
