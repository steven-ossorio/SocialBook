import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentList from "./comment_list";
import { updateComment, deleteComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  let user = state.users[ownProps.match.params.userId];

  return {
    currentUser: state.session.currentUser,
    user,
    comments: state.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: id => dispatch(deleteComment(id)),
    updateComment: comment => dispatch(updateComment(comment))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentList)
);
