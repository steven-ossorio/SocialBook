import React from "react";
import HomeContainer from "./home/home_container";
import ProfileContainer from "./profile/profile_container";
import FriendsContainer from "./profile/friends_list_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/users/:userId" component={ProfileContainer} />
      <Route exact path="/users/:userId/friends" component={FriendsContainer} />
    </header>
  </div>
);
export default App;
