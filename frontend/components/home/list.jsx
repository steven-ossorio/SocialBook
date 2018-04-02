import React from 'react';
import { Link } from 'react-router-dom';

const ListSection = ({ user }) => {
  return(
    <ul>
      <Link to={`/users/${user.id}`}>
        <li className="current-user-link">
          <img className="nav-profile-image" src={ user.image_url }></img>
          <span>{ user.firstName }</span>
          <span>{ user.lastName }</span>
        </li>
      </Link>
    </ul>
  );
};

export default ListSection;
