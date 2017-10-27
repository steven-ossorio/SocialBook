import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);

  }

  render(){
    if (this.props.currentUser) {
      return(
        <div className="profile-page-top">
          <main className="newsfeed-nav-container">
            <div className="newsfeed-nav-items">
              <Link to="/"><h1 className="logo"><i className="fa fa-facebook-official"></i></h1></Link>
              <ul className="navbar-items">
                <li>
                  <img className="nav-profile-image" src={ this.props.currentUser.image_url }></img>
                  <Link to={`/users/${ this.props.currentUser.id}` }>{ this.props.currentUser.firstName }</Link>
                </li>
                <li>Home</li>
                <li><i className="fa fa-users"></i></li>
                <li><i className="fa fa-comments"></i></li>
                <li><i className="fa fa-globe"></i></li>
                <li><i className="fa fa-question-circle"></i></li>
                <li><i className="fa fa-arrow-circle-down"></i></li>
              </ul>
            </div>
          </main>
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
