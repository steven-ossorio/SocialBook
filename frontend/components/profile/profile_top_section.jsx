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
        <div className="profile-page-top">
          <ProfileNav currentUser={ this.props.currentUser } />
          <div className="top-profile-portion-container">
            <div className="top-profile-portion">
              <img className="profile-cover-image" src={ this.props.currentUser.cover_image_url }></img>
              <img className="profile-image" src={ this.props.currentUser.image_url }></img>
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
      </div>
    );
  }
}

export default ProfileTopSection;
