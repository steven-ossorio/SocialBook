import React, { Component } from 'react';

class PostIndex extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.renderPosts = this.renderPosts.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  deletePost(idx){
    const that = this;
    return () => that.props.deletePost(idx);
  }

  renderPosts() {
    return Object.values(this.props.posts).map( (post, idx) => {
      return (
        <li key={ `${post.id}` }>
          <p>{ post.text }</p>,
          <button onClick={ this.deletePost(post.id) }>Delete Post</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderPosts() }
        <h1>Hello there</h1>
      </div>
    );
  }
}

export default PostIndex;
