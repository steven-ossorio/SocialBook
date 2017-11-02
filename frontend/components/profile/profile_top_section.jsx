import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from './profile_nav';
import ProfileImage from './profile_image';


class ProfileTopSection extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let addButton = "";
    if (this.props.user.requests.includes(this.props.currentUser.id)) {
      addButton = <button className="adding-friend">Pending</button>;
    } else if (this.props.user.friendIds.includes(this.props.currentUser.id)) {
      addButton = <button className="adding-friend">Friends</button>;
    } else if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
      addButton = <button className="adding-friend" onClick={ () => this.props.createFriendship(this.props.user.id) }>Add Friend</button>;
    } else {
      addButton = <button className="adding-friend">Have a nice day</button>;
    }
    return(
      <div>
        <ProfileNav currentUser={ this.props.currentUser } />
        <div className="profile-page-top">
          <div className="top-profile-portion-container">
            <div className="profile-cover-container">
              <img className="profile-cover-image" src={ this.props.user.cover_image_url }></img>
              { addButton }
            </div>
            <div className="profile-image-second-container">
              <div className="profile-image-container" style={{ backgroundImage: `url(${this.props.user.image_url})`}}>
                <ProfileImage currentUser={ this.props.currentUser} updateUser={ this.props.updateUser } match={ this.props.match }/>
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
