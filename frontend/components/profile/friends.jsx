import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Friends extends Component {
  constructor(props){
    super(props);

  }

  render(){
    let friendsCount = Object.values(this.props.friends).length;
    let friends = Object.values(this.props.friends).map( friend => {
      return (
        <Link className="profile-friend-link" to={ `/users/${friend.id}` } key={ `${ friend.id }` }>
          <div className="profile-friend-image" style={{ backgroundImage: `url(${friend.image})`}}>
            <ul className="friend-full-name">
              <li>{ friend.first_name }</li>
              <li>{ friend.last_name }</li>
            </ul>
          </div>
        </Link>
      );
    });
    let friendsList = friends.slice(0, 9);
    return(
      <div>
        <div className="profile-friends-container">
          <div>
            <div className="profile-friends-heading">
              <div className="profile-friends-icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <p>Friends { friendsCount }</p>
            </div>
            <div className="all-friends-profile-container">
              { friendsList }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
