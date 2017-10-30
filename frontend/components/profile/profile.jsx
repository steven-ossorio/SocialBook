import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from '../post/post_form_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileTopSection from './profile_top_section';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render(){
    // console.log(this.props.users);
    // console.log(Object.values(this.props.users));
    if (this.props.currentUser) {
      let test = Object.values(this.props.users);
      console.log(test[0]);
      let test2 = test[0];
      if (test2) {
        console.log(test2.id);
      }

      return(
        <div>
          <ProfileTopSection currentUser={ this.props.currentUser } />
          <div className="profile-page-container" >
            <div>
              left portion
            </div>
            <div className="posts-container">
              <PostFormContainer />
              <PostIndexContainer />
            </div>
          </div>
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
