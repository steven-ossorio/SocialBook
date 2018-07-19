import React from "react";

export default props => {
  if (props.friends) {
    let friends = Object.keys(props.friends).map(friendId => {
      let friend = props.friends[friendId];
      return (
        <div className="friend-list-container">
          <div className="friend-list-description">
            <img className="friend-list-image" src={friend.image} alt="" />
            <span className="friend-list-name">
              {friend.first_name} {friend.last_name}
            </span>
          </div>
          <div className="friend-list-button">
            <button>WE ARE FRIENDS</button>
          </div>
        </div>
      );
    });
    return <div>IT LOADED {friends}</div>;
  } else {
    return <div>DID NOT LOAD</div>;
  }
};
