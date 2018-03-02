import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


class Friends extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.friends === undefined) {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={'#0000FF'} />
        </div>
      );
    } else {
      let friendsCount = this.props.friendIds;
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
}

export default Friends;
