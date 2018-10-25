import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import DeleteComment from "./delete_comment";

class CommentList extends Component {
  state = {
    startIndex: 0,
    endIndex: 0
  };

  showMoreComments = () => {
    let startIndex;
    if (this.state.startIndex - 3 < 0) {
      startIndex = 0;
    } else {
      startIndex = this.state.startIndex - 3;
    }
    this.setState({
      startIndex
    });
  };

  componentDidMount() {
    const { comments, postId } = this.props;

    if (comments) {
      this.setState({
        startIndex: comments[postId].length - 3,
        endIndex: comments[postId].length
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { postId, comments } = this.props;

    if (nextProps.comments[nextProps.postId].length > comments[postId].length) {
      this.setState({
        endIndex: nextProps.comments[postId].length
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { comments, postId } = this.props;

    if (
      comments[postId].length <= nextProps.comments[nextProps.postId].length ||
      comments[postId].length >= nextProps.comments[nextProps.postId].length
    ) {
      return true;
    } else if (nextState.startIndex < this.state.startIndex) {
      return true;
    }

    return false;
  }

  commentOwner = comment => {
    const { currentUser, deleteComment, updateComment, user } = this.props;

    if (comment.user.id === currentUser.id) {
      return (
        <span>
          <DeleteComment
            deleteComment={deleteComment}
            updateComment={updateComment}
            comment={comment}
            currentUser={currentUser}
            user={user}
          />
        </span>
      );
    }
  };

  renderComments = () => {
    const { comments, postId } = this.props;

    let loadMoreComments =
      comments[postId].length && this.state.startIndex > 0 ? (
        <p className="loading-more-comments" onClick={this.showMoreComments}>
          View 3 more comments
        </p>
      ) : (
        ""
      );
    let commentList = comments[postId].slice(
      this.state.startIndex,
      this.state.endIndex
    );

    commentList = commentList.map(comment => {
      return (
        <div className="comment-list" key={`${comment.id}`}>
          <div className="comment-container">
            <img src={comment.user.image} />
            <div className="comment-content">
              <Link
                className="comment-owner-name"
                to={`/users/${comment.user.id}`}
                replace
              >
                {comment.user.first_name}
              </Link>
              <span>{comment.text}</span>
            </div>
            {this.commentOwner(comment)}
          </div>
        </div>
      );
    });

    if (comments === null && comments.length > 0) {
      return <div className="loading-spin" />;
    } else {
      return (
        <div>
          {loadMoreComments}
          {commentList}
        </div>
      );
    }
  };

  render() {
    return <div className="list-of-post">{this.renderComments()}</div>;
  }
}

export default CommentList;
