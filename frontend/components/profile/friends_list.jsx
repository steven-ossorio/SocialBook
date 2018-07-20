import React, { Component } from "react";
import ProfileNavContainer from "./profile_nav_container";
import ProfileTopContainer from "./profile_top_container";
import FriendListItem from "./friend_list_item";

export default class friends_list extends Component {
  render() {
    return (
      <div>
        <ProfileNavContainer props={this.props} />
        <ProfileTopContainer props={this.props} />
        <FriendListItem friends={this.props.friends} />
      </div>
    );
  }
}
