import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentList from "./comment_list";
import { createComment, deleteComment } from "../../actions/comment_actions";

const mapStateToProps = state => {
  return {
    comments: state.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentList)
);
