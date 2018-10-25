import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import moment from "moment";
import { Redirect } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent
} from "react-simple-dropdown";
import DropDown from "./dropdown";
import PostDropDown from "./delete_post.jsx";
import SessionFormContainer from "../session/session_form_container";
import SignUpFormContainer from "../signup/signup_form_container";
import ProfileContainer from "../profile/profile_container";
import PostFormContainer from "../post/post_form_container";
import HomeNavContainer from "./home_nav_container";
import NewsFeedContainer from "./newsfeed_container";
import AboutDeveloper from "./about_developer";
import NewsContainer from "./news_container";
import ListSection from "./list";

class Home extends Component {
  componentDidMount() {
    const {
      newsfeed,
      user,
      currentUser,
      fetchNewsFeed,
      fetchUser
    } = this.props;

    if ((newsfeed === undefined || user === undefined) && currentUser) {
      fetchNewsFeed();
      fetchUser(currentUser.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser, fetchNewsFeed, fetchUser } = this.props;

    if (!currentUser && nextProps.currentUser) {
      fetchNewsFeed();
      fetchUser(nextProps.currentUser.id);
    }
  }

  render() {
    const { currentUser, user } = this.props;

    if (currentUser === null) {
      return (
        <div>
          <SessionFormContainer />
          <SignUpFormContainer />
        </div>
      );
    } else if (currentUser !== undefined && user !== undefined) {
      return (
        <div>
          <HomeNavContainer />
          <div className="newsfeed_container">
            <div className="landing-page-container">
              <div className="left-portion">
                <ListSection user={user} />
              </div>
              <div className="middle-portion">
                <PostFormContainer />
                <NewsFeedContainer />
              </div>
              <div className="right-portion">
                <NewsContainer />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (currentUser && user === undefined) {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={"#0000FF"} />
        </div>
      );
    }
  }
}

export default Home;
