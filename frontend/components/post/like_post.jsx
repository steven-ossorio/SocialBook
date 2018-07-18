import React, { Component } from "react";
import { like } from "../../actions/like_actions";

class Like extends Component {
  like() {
    let data = {
      liked_id: this.props.postId,
      type: "POST"
    };
    this.props.like(data);
  }

  render() {
    return (
      <div className="like-container">
        <div className="like" onClick={this.like.bind(this)}>
          <i class="fa fa-thumbs-up" /> <span>Like</span>
        </div>
      </div>
    );
  }
}

export default Like;
