import React from "react";
import { Link } from "react-router-dom";

const ListSection = ({ user }) => {
  return (
    <ul>
      <Link to={`/users/${user.id}`}>
        <li className="current-user-link">
          <img className="nav-profile-image" src={user.image_url} />
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </li>
      </Link>
      <li className="newsfeed-list">
        <i className="fa fa-newspaper-o" />
        <span>News Feed</span>
      </li>
      <a href="//github.com/steven-ossorio/SocialBook">
        <li className="about-me-list">
          <i className="fa fa-github" />
          <span>Github</span>
        </li>
      </a>
      <a href="//linkedin.com/in/steven-ossorio/">
        <li className="about-me-list">
          <i className="fa fa-linkedin" />
          <span>LinkedIn</span>
        </li>
      </a>
      <a href="//www.stevenossorio.com">
        <li className="about-me-list">
          <i className="fa fa-code" />
          <span>Personal Site</span>
        </li>
      </a>
    </ul>
  );
};

export default ListSection;
