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
    console.log(this.props);
    return (
      <div>
        <button onClick={this.like.bind(this)}>Press me to like</button>
      </div>
    );
  }
}

export default Like;
