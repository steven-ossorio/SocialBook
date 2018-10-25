import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div className="profile-page-top">
          <main className="newsfeed-nav-container">
            <div className="newsfeed-nav-items">
              <h1 className="logo">
                <Link to="/">
                  <i className="fa fa-facebook-official" />
                </Link>
              </h1>
              <ul className="navbar-items">
                <li>
                  <img
                    className="nav-profile-image"
                    src={this.props.currentUser.image_url}
                  />
                  <Link to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.firstName}
                  </Link>
                </li>
                <li>Home</li>
                <li>
                  <i className="fa fa-users" />
                </li>
                <li>
                  <i className="fa fa-comments" />
                </li>
                <li>
                  <i className="fa fa-globe" />
                </li>
                <li>
                  <i className="fa fa-question-circle" />
                </li>
                <li>
                  <i className="fa fa-arrow-circle-down" />
                </li>
              </ul>
            </div>
          </main>
          <div className="top-profile-portion-container">
            <div className="top-profile-portion">
              <img
                className="profile-cover-image"
                src={this.props.currentUser.cover_image_url}
              />
              <img
                className="profile-image"
                src={this.props.currentUser.image_url}
              />
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
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default About;
