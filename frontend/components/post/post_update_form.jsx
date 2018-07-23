import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

class PostUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.post.text
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const post = this.props.post;
    post.text = this.state.text;
    this.props.updatePost(post);
    this.props.closeAllModal();
  }

  render() {
    if (this.props.currentUser && this.props.user) {
      return (
        <div>
          <form>
            <div className="post-form-container">
              <div className="post-inner-container">
                <img
                  className="post-form-image"
                  src={this.props.user.image_url}
                />
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
