import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
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

    const post = Object.assign({}, this.state);
    if (this.props.match.params.userId !== undefined) {
      post.profile_id = this.props.match.params.userId;
    } else {
      post.profile_id = this.props.currentUser.id;
    }
    this.props.createPost(post).then( () => {
      this.setState({
        text: ""
      });
    });
  }

  render(){
    if (this.props.currentUser && this.props.user) {
      return(
        <div>
          <form>
            <div className="post-form-container">
              <div className="post-form-option-container">
                <p className="make-a-post"><i className="fa fa-pencil" aria-hidden="true"></i>Make Post</p>
              </div>
              <div className="post-inner-container">
                <img className="post-form-image" src={ this.props.user.image_url }></img>
                <textarea className="post-input-field" onChange={ this.update('text') } value={ this.state.text } placeholder="What's on your mind?"></textarea>
              </div>
              <div className="post-form-button-container">
                <button className="post-submit-button" onClick={ this.onSubmit }>Post</button>
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

export default PostForm;
