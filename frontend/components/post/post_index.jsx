import React, { Component } from 'react';
import moment from 'moment';

class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePostsId: this.props.profilePostsId
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  // componentDidMount(){
  //   // if (this.props.currentUser.id === this.props.match.params.userId) {
  //     this.props.fetchPosts();
  //   // }
  //   debugger
  // }

  componentWillReceiveProps(nextProps, nextState) {
    if (Object.keys(this.props.posts).length < Object.keys(nextProps.posts).length) {
      this.props.fetchUser(nextProps.match.params.userId);
    }

    if (Object.keys(this.props.posts).length > Object.keys(nextProps.posts).length) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  deletePost(idx){
    const that = this;
    return () => that.props.deletePost(idx);
  }

  renderPosts() {

    let posts = this.props.profilePostsId.reverse().map( id => {
      return this.props.posts[id];
    });
    return posts.map( (post, idx) => {
      return (
        <li className="post-list" key={ `${post.id}` }>
          <div className="post-list-container">
            <div className="entire-top-container">
              <div className="post-top-container">
                <div className="post-top-left-container">
                  <div>
                    <img className="post-form-image" src={ post.image }></img>
                  </div>
                  <div className="post-name-container">
                    <div>{ post.first_name }</div>
                    <div>{ moment(post.created_at).format("LL").slice(0, 10) }</div>
                  </div>
                </div>
                <button onClick={ this.deletePost(post.id) }>Delete Post</button>
              </div>
            </div>
            <p className="post-list-text">{ post.text }</p>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderPosts() }
      </div>
    );
  }
}

export default PostIndex;
