import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RingLoader } from 'react-spinners';



class NewsFeed extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (!this.props.user[this.props.currentUser.id]) {
      this.props.fetchUser(this.props.currentUser.id);
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

  render(){
    if (!(this.props.newsfeed === undefined)) {
      let posts = this.props.newsfeed.map( post => (
        <li className="post-list" key={ `${post.id}` }>
          <div className="post-list-container">
            <div className="entire-top-container">
              <div className="post-top-container">
                <div className="post-top-left-container">
                  <div>
                    <img className="post-form-image" src={ post.image }></img>
                  </div>
                  <div className="post-name-container">
                    <p>{ post.first_name }</p>
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
