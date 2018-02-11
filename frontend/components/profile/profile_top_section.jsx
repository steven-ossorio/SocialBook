import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from './profile_nav';
import ProfileImage from './profile_image';
import FriendDropDown from './delete_friend_dropdown';


class ProfileTopSection extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let addButton = "";
    if (this.props.currentUser !== null) {

      if (this.props.user.requests.includes(this.props.currentUser.id) && this.props.user.requests.includes(this.props.currentUser.id) !== null) {
        addButton =  <div className="pending-friend-container">
          <i className="fa fa-user-plus"></i><button className="adding-friend">Friend Request Send</button>
        </div>

      } else if (this.props.user.friendIds.includes(this.props.currentUser.id)) {
        addButton = <FriendDropDown deleteFriendship={ this.props.deleteFriendship } user={ this.props.user } />;
      } else if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
        addButton = <div className="add-friend-container">
          <i className="fa fa-user-plus"></i><button className="adding-friend" onClick={ () => this.props.createFriendship(this.props.user.id) }><spam>Add Friend</spam></button>
        </div>;
      }

      let profileId = this.props.match.params.userId;
      let fullName = this.props.user.firstName + " " + this.props.user.lastName;

      return(
        <div>
          <div className="profile-page-top">
            <div className="top-profile-portion-container">
              <div className="profile-cover-container">
                <img className="profile-cover-image" src={ this.props.user.cover_image_url }></img>
                <div className="user-name">
                  <p>{ fullName }</p>
                  { addButton }
                </div>
              </div>
              <div className="profile-image-container">
                <div style={{ backgroundImage: `url(${this.props.user.image_url})`}}></div>
                <ProfileImage currentUser={ this.props.currentUser} updateUser={ this.props.updateUser } match={ this.props.match }/>
              </div>
              <div className="profile-pages-container">
                <ul>
                  <li className="profile-timeline">Timeline</li>
                  <li className="profile-about hidden-element">About</li>
                  <li className="profile-friends hidden-element">Friends</li>
                  <li className="profile-photos hidden-element">Photos</li>
                  <li className="profile-more hidden-element">More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default ProfileTopSection;
