import React, { Component } from 'react';
import MDSpinner from "react-md-spinner";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import DropDown from './dropdown';
import SessionFormContainer from '../session/session_form_container';
import SignUpFormContainer from '../signup/signup_form_container';
import ProfileContainer from '../profile/profile_container';
import PostFormContainer from '../post/post_form_container';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger
    if (this.props.user === undefined || this.props.newsFeed === undefined) {
      this.props.fetchUser(this.props.currentUser.id);
      this.props.fetchNewsFeed();
    }
  }

  componentWillReceiveProps(nextProps){
    debugger
    if (this.props.currentUser === null && nextProps.currentUser !== null) {
      this.props.fetchUser(nextProps.currentUser.id);
      this.props.fetchNewsFeed();
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

  render(){
    debugger
    if (this.props.currentUser && this.props.user) {
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
          <main className="newsfeed-nav-container">
            <div className="newsfeed-nav-items">
              <h1 className="logo"><Link to="/"><i className="fa fa-facebook-official"></i></Link></h1>
              <ul className="navbar-items">
                <li>
                  <img className="nav-profile-image" src={ this.props.user.image_url }></img>
                  <Link to={`/users/${ this.props.currentUser.id}` }>{ this.props.user.firstName }</Link>
                </li>
                <li>Home</li>
                <li className="hidden-element"><i className="fa fa-users"></i></li>
                <li className="hidden-element"><i className="fa fa-comments"></i></li>
                <li className="hidden-element"><i className="fa fa-globe"></i></li>
                <li className="hidden-element"><i className="fa fa-question-circle"></i></li>
                <li><DropDown logout={ this.props.logout } /></li>
              </ul>
            </div>
          </main>

          <div className="newsfeed_container">
            <PostFormContainer props={ this.props } user={ this.props.user } />
            { posts }
          </div>
        </div>
      );
    } else if (this.props.currentUser && this.props.user === undefined) {
      return (
        <MDSpinner />
      );
    } else {
      return (
        <div>
          <SessionFormContainer />
          <SignUpFormContainer />
        </div>
      );
    }
  }
}

export default Home;
