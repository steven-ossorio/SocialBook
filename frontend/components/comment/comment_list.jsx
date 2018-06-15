import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderComments = this.renderComments.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.comments[this.props.postId].length !== this.props.comments[this.props.postId].length) {
      return true;
    }

    return false;
  }

  renderComments() {
    if (this.props.comments === null && this.props.comments.length > 0) {
      return (
        <div className="loading-spin">

        </div>
      );
    } else {
      return this.props.comments[this.props.postId].map( (comment, idx) => {
        return (
          <li className="post-list" key={ `${comment.id}` }>
            <div className="comment-container">
              <img src={comment.user.image}></img>
              <div className="comment-content">
                <Link className="comment-owner-name" to={`/users/${comment.user.id}`} replace>{comment.user.first_name}</Link>
                <p>{comment.text}</p>
              </div>
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="list-of-post">
        { this.renderComments() }
      </div>
    );
  }
}

export default CommentList;
