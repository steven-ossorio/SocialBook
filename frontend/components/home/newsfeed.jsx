import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RingLoader } from 'react-spinners';
import PostDropDown from './delete_post.jsx';

class NewsFeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 10,
      posts: []
    };
    this.addMorePosts = this.addMorePosts.bind(this);
  }

  componentDidMount() {
    if (!this.props.user[this.props.currentUser.id]) {
      this.props.fetchUser(this.props.currentUser.id);
    }

    if(this.props.newsfeed !== undefined) {
      debugger
      this.addMorePosts();
    }
  }

  postOwner(post) {
    if (post.owner === this.props.currentUser.id) {
      return (
        <div>
          <PostDropDown deletePost={ this.props.deletePost } post={ post } />
        </div>
      );
    }
  }

  addMorePosts() {
    let postsId = {};
    let excludeRepeat = this.props.newsfeed.filter( post => {
      if (!postsId[post.id]) {
        postsId[post.id] = true;
        return post;
      }
    }).slice(this.state.startIndex, this.state.endIndex);

    this.setState({
      posts: this.state.posts.concat(excludeRepeat),
      startIndex: this.state.startIndex + 10,
      endIndex: this.state.endIndex + 10
    });
  }

  render(){
    if ((this.props.newsfeed !== undefined)) {
      // let excludeRepeat;
      // if (this.state.posts.length === 0) {
      //   let postsId = {};
      //   excludeRepeat = this.props.newsfeed.filter( post => {
      //     if (!postsId[post.id]) {
      //       postsId[post.id] = true;
      //       return post;
      //     }
      //   }).slice(0, 10);
      // } else {
      //   excludeRepeat = this.state.posts;
      // }
      let posts = this.state.posts.map( post => (
        <li className="post-list" key={ `${post.id}` }>
          <div className="post-list-container">
            <div className="entire-top-container">
              <div className="post-top-container">
                <div className="post-top-left-container">
                  <div>
                    <img className="post-form-image" src={ post.image }></img>
                  </div>
                  <div className="post-name-container">
                    <Link to={ `users/${ post.owner }`}><p>{ post.first_name }</p></Link>
                    <p>{ moment(post.created_at).format("LL").slice(0, 10) }</p>
                  </div>
                </div>
                { this.postOwner(post) }
              </div>
            </div>
            <p className="post-list-text">{ post.text }</p>
          </div>
        </li>
      ));
      return(
        <div>
          { posts }
          <button onClick={ () => this.addMorePosts() }> See more </button>
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

export default NewsFeed;
