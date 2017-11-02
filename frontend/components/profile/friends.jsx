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
        <div key={ `${ friend.id }` }>
          <div className="profile-friend-image" style={{ backgroundImage: `url(${friend.image})`}}>

            <div className="friend-full-name">
              <li>{ friend.first_name }</li>
              <li>{ friend.last_name }</li>
            </div>
          </div>
        </div>
      );
    });
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
            {friends}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
