import React, { Component } from 'react';
import DropDown from './dropdown';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePostsId: this.props.profilePostsId
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.postOwner = this.postOwner.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (Object.keys(this.props.posts).length < Object.keys(nextProps.posts).length) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  postOwner(post) {
    if (post.owner === this.props.currentUser.id) {
      return (
        <div>
          <DropDown deletePost={ this.props.deletePost } post={ post } />
        </div>
      );
    }
  }

  renderPosts() {
    if (this.props.profilePostsId === null) {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={'#0000FF'} />
        </div>
      );
    } else {
      let posts = this.props.profilePostsId.sort().reverse().map( id => {
        return this.props.posts[id];
      });

      posts = posts.filter(post=>{
        return post;
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
                      <Link to={ `/users/${post.owner}` } replace><p>{ post.first_name }</p></Link>
                      <p>{ moment(post.created_at).format("LL").slice(0, 10) }</p>
                    </div>
                  </div>
                  { this.postOwner(post) }
                </div>
              </div>
              <p className="post-list-text">{ post.text }</p>
            </div>
          </li>
        );
      });
    }
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
