import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

class PostUpdateForm extends Component {
  state = {
    text: this.props.post.text
  };

  update = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  onSubmit = e => {
    const { post, updatePost, closeAllModal } = this.props;

    e.preventDefault();
    post.text = this.state.text;
    updatePost(post);
    closeAllModal();
  };

  render() {
    const { currentUser, user } = this.props;

    if (currentUser && user) {
      return (
        <div>
          <form>
            <div className="post-form-container">
              <div className="post-inner-container">
                <img className="post-form-image" src={user.image_url} />
                <textarea
                  className="edit-post-input-field"
                  onChange={this.update("text")}
                  value={this.state.text}
                  placeholder="What's on your mind?"
                />
              </div>
              <div className="edit-post-form-button-container">
                <button className="post-submit-button" onClick={this.onSubmit}>
                  Save
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

export default PostUpdateForm;
