import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { merge } from 'lodash';
import PostFormContainer from '../post/post_form_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileTopSection from './profile_top_section';
import Friends from './friends';
import Intro from './intro';

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

    if (this.props.user) {
      return(
        <div>
          <ProfileTopSection history={this.props.history} updateFriendship={ this.props.updateFriendship } deleteFriendship={ this.props.deleteFriendship } match={ this.props.match } fetchUser={ this.props.fetchUser } createFriendship={ this.props.createFriendship } updateUser={ this.props.updateUser } currentUser={ this.props.currentUser } user={ this.props.user } logout={ this.props.logout } />
          <div className="profile-page-container" >
            <div className="profile-left-section">
              <Intro />
              <Friends friends={ this.props.friends } />
            </div>
            <div className="posts-container">
              <PostFormContainer props={ this.props} user={ this.props.user }/>
              <PostIndexContainer />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default Profile;
