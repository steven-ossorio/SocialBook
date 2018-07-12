import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startIndex: this.props.comments[this.props.postId].length,
      endIndex: this.props.comments[this.props.postId].length
    };
    this.renderComments = this.renderComments.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.comments[this.props.postId].length !==
      this.props.comments[this.props.postId].length
    ) {
      return true;
    }

    return false;
  }

  renderComments() {
    let loadMoreComments =
      this.props.comments[this.props.postId].length > 3 ? (
        <p>Load More Comments</p>
      ) : (
        ""
      );
    let commentList = this.props.comments[this.props.postId].slice(
      this.state.startIndex - 3,
      this.state.endIndex
    );

    commentList = commentList.map((comment, idx) => {
      return (
        <div>
          <li className="post-list" key={`${comment.id}`}>
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
            </div>
          </li>
        </div>
      );
    });

    if (this.props.comments === null && this.props.comments.length > 0) {
      return <div className="loading-spin" />;
    } else {
      return (
        <div>
          {loadMoreComments}
          {commentList}
        </div>
      );
    }
  }

  render() {
    return <div className="list-of-post">{this.renderComments()}</div>;
  }
}

export default CommentList;
