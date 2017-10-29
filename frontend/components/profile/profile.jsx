import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from '../post/post_form_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileTopSection from './profile_top_section';

class Profile extends Component {
  constructor(props){
    super(props);

  }

  render(){
    if (this.props.currentUser) {
      return(
        <div>
          <ProfileTopSection currentUser={ this.props.currentUser } />
          <PostFormContainer />
          <PostIndexContainer />
          <button onClick={ this.props.logout }>Logout</button>
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
