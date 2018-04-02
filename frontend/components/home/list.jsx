import React from 'react';
import { Link } from 'react-router-dom';

const ListSection = ({ user }) => {
  return(
    <ul>
      <li className="current-user-link">
        <img className="nav-profile-image" src={ user.image_url }></img>
        { user.firstName }
        { user.lastName }
      </li>
    </ul>
  );
};

export default ListSection;
