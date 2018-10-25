import React, { Component } from "react";
import { RingLoader } from "react-spinners";

class PostForm extends Component {
  state = {
    text: ""
  };

  update = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  onSubmit = e => {
    e.preventDefault();
    const { currentUser, createPost, match } = this.props;

    const post = Object.assign({}, this.state);
    if (match.path !== "/" && Number(match.params.userId) !== currentUser.id) {
      post.profile_id = match.params.userId;
    } else {
      post.profile_id = currentUser.id;
    }
    if (post.text !== "") {
      createPost(post).then(() => {
        this.setState({
          text: ""
        });
      });
    }
  };

  render() {
    const { currentUser, user } = this.props;

    if (currentUser && user) {
      return (
        <div>
          <form>
            <div className="post-form-container">
              <div className="post-form-option-container">
                <p className="make-a-post">
                  <i className="fa fa-pencil" aria-hidden="true" />
                  Make Post
                </p>
              </div>
              <div className="post-inner-container">
                <img className="post-form-image" src={user.image_url} />
                <textarea
                  className="post-input-field"
                  onChange={this.update("text")}
                  value={this.state.text}
                  placeholder="What's on your mind?"
                />
              </div>
              <div className="post-form-button-container">
                <button className="post-submit-button" onClick={this.onSubmit}>
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={"#0000FF"} />
        </div>
      );
    }
  }
}

export default PostForm;
