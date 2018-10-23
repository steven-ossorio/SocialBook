import React, { Component } from "react";
import PostFormContainer from "../post/post_form_container";
import PostIndexContainer from "../post/post_index_container";
import ProfileTopContainer from "./profile_top_container";
import IntroContainer from "./intro_container";
import ProfileNavContainer from "./profile_nav_container";
import FriendsContainer from "./friends_container";
import { RingLoader } from "react-spinners";
import { object, func } from "prop-types";

class Profile extends Component {
  static propType = {
    currentUser: object.isRequired,
    fetchUser: func.isRequired
  };

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <ProfileNavContainer props={this.props} />
          <ProfileTopContainer props={this.props} />
          <div className="profile-page-container">
            <div className="profile-left-section">
              <IntroContainer />
              <FriendsContainer />
            </div>
            <div className="posts-container">
              <PostFormContainer />
              <PostIndexContainer />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={"#0000FF"} />
        </div>
      );
    }
  }
}

export default Profile;
