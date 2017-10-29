import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from './profile_nav';

class ProfileTopSection extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <ProfileNav currentUser={ this.props.currentUser } />
        <div className="profile-page-top">
          <div className="top-profile-portion-container">
            <div className="profile-cover-container">
              <img className="profile-cover-image" src={ this.props.currentUser.cover_image_url }></img>
            </div>
            <div className="profile-image-second-container">
              <div className="profile-image-container" style={{ backgroundImage: `url(${this.props.currentUser.image_url})`}}>
              </div>
            </div>
            <div className="profile-pages-container">
              <ul className="profile-pages">
                <li className="profile-timeline">Timeline</li>
                <li className="profile-about">About</li>
                <li className="profile-friends">Friends</li>
                <li className="profile-photos">Photos</li>
                <li className="profile-more">More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTopSection;
