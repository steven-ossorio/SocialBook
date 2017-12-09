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
    let secondButton = "";
    if (this.props.currentUser !== null) {

      if (this.props.user.requests.includes(this.props.currentUser.id) && this.props.user.requests.includes(this.props.currentUser.id) !== null) {
        addButton = <button className="adding-friend">Pending</button>;
      } else if (this.props.user.friendIds.includes(this.props.currentUser.id)) {
        // addButton = <button className="adding-friend">Friends</button>;
        secondButton = <button onClick={ () => this.props.deleteFriendship(this.props.user.id) } className="adding-friend">Delete Friend</button>;
      } else if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
        addButton = <button className="adding-friend" onClick={ () => this.props.createFriendship(this.props.user.id) }>Add Friend</button>;
      }

      let profileId = this.props.match.params.userId;
      let fullName = this.props.user.firstName + " " + this.props.user.lastName;

      return(
        <div>
          <ProfileNav history={ this.props.history } updateFriendship={ this.props.updateFriendship} logout={ this.props.logout } currentUser={ this.props.currentUser } user={ this.props.user } />
          <div className="profile-page-top">
            <div className="top-profile-portion-container">
              <div className="profile-cover-container">
                <img className="profile-cover-image" src={ this.props.user.cover_image_url }></img>
                <div className="user-name">
                  <p>{ fullName }</p>
                  { addButton }
                  { secondButton }
                </div>
              </div>
              <div className="profile-image-container">
                <div style={{ backgroundImage: `url(${this.props.user.image_url})`}}>
                  <ProfileImage currentUser={ this.props.currentUser} updateUser={ this.props.updateUser } match={ this.props.match }/>
                </div>
              </div>
              <div className="profile-pages-container">
                <ul>
                  <li className="profile-timeline">Timeline</li>
                  <li className="profile-about ">About</li>
                  <li className="profile-friends ">Friends</li>
                  <li className="profile-photos ">Photos</li>
                  <li className="profile-more ">More</li>
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
