import React from "react";

export default props => {
  if (props.friends) {
    let friends = Object.keys(props.friends).map(friendId => {
      let friend = props.friends[friendId];
      return (
        <div className="friends-list-item">
          <div className="friends-list-description">
            <img className="friends-list-image" src={friend.image} alt="" />
            <span className="friends-list-name">
              {friend.first_name} {friend.last_name}
            </span>
          </div>
          <div className="friends-list-button">
            <button>WE ARE FRIENDS</button>
          </div>
        </div>
      );
    });
    return (
      <div className="friends-container">
        <div className="friends-list-header">Friends</div>
        <div className="friends-list-container">{friends}</div>
      </div>
    );
  } else {
    return <div>DID NOT LOAD</div>;
  }
};
