import React, { Component } from "react";

class Like extends Component {
  like() {
    let data = {
      liked_id: this.props.postId,
      type: "POST"
    };
    this.props.like(data);
  }

  unlike() {
    this.props.unlike(this.props.postId);
  }

  render() {
    if (this.props.likeIds.includes(this.props.userId)) {
      return (
        <div className="like-container">
          <div className="liked" onClick={this.unlike.bind(this)}>
            <i className="fa fa-thumbs-up" /> <span>Like</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="like-container">
          <div className="like" onClick={this.like.bind(this)}>
            <i className="fa fa-thumbs-o-up" /> <span>Like</span>
          </div>
        </div>
      );
    }
  }
}

export default Like;
