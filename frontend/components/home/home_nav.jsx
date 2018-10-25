import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";
import RequestDropDown from "../profile/request_dropdown";

class HomeNav extends Component {
  componentDidMount() {
    const { user, currentUser, fetchUser } = this.props;

    if (!user[currentUser.id]) {
      fetchUser(currentUser.id);
    }
  }

  render() {
    const {
      user,
      currentUser,
      requests,
      updateFriendship,
      logout
    } = this.props;

    return (
      <main className="newsfeed-nav-container">
        <div className="newsfeed-nav-items">
          <h1 className="logo">
            <Link to="/" replace>
              <i className="fa fa-facebook-official" />
            </Link>
          </h1>
          <ul className="navbar-items">
            <li className="nav-profile-image-container">
              <img className="nav-profile-image" src={user.image_url} />
              <Link to={`/users/${currentUser.id}`}>{user.firstName}</Link>
            </li>
            <li>
              <Link to="/" replace>
                Home
              </Link>
            </li>
            <RequestDropDown
              requests={requests}
              currentUser={currentUser}
              user={user}
              updateFriendship={updateFriendship}
            />
            <li className="hidden-element">
              <i className="fa fa-comments" />
            </li>
            <li className="hidden-element">
              <i className="fa fa-globe" />
            </li>
            <li className="hidden-element">
              <i className="fa fa-question-circle" />
            </li>
            <li>
              <DropDown logout={logout} />
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default HomeNav;
