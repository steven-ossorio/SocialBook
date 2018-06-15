import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      post_id: ""
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
    const comment = Object.assign({}, this.state);
    if (e.key === 'Enter') {
      comment.post_id = this.props.postId;

      if (comment.text !== "") {
        this.props.createComment(comment).then( () => {
          this.setState({
            text: "",
            post_id: ""
          });
        });
      }
    }
  }

  render(){
    if (this.props.user) {
      return(
        <div>
          <form>
            <div className="comment-form-container">
              <div className="comment-inner-container">
                <img className="comment-form-image" src={ this.props.user.image_url }></img>
                <textarea onKeyPress={ this.onSubmit }className="comment-input-field" onChange={ this.update('text') } value={ this.state.text } placeholder="Write a comment..."></textarea>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={'#0000FF'} />
        </div>
      );
    }
  }
}

export default CommentForm;
