import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import PostFormContainer from '../post/post_form_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileTopSection from './profile_top_section';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render(){
    // console.log("user", this.props.user);
    // console.log("state", this.state);
    if (this.props.user) {

      return(
        <div>
          <ProfileTopSection match={ this.props.match } updateUser={ this.props.updateUser } currentUser={ this.props.currentUser } user={ this.props.user } />
          <div className="profile-page-container" >
            <div>
              { this.props.user.firstName }
              left portion
            </div>
            <div className="posts-container">
              <PostFormContainer props={ this.props} user={ this.props.user }/>
              <PostIndexContainer />
            </div>
          </div>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          // <h1>hello</h1>
        </div>
      );
    }
  }
}

export default Profile;
