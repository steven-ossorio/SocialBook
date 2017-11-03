import React from 'react';
import { merge, omit } from 'lodash';

import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_FRIEND, REMOVE_FRIEND, UPDATE_FRIEND } from '../../actions/friend_actions';

const UserReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      newState = merge({}, state, { [action.user.id]: action.user });
      newState.friends = action.friends || {};
      return newState;
    case RECEIVE_FRIEND:
      let friendee = action.friend.friendee_id;
      newState = merge({}, state);
      newState[friendee].requests.push(action.friend.friender_id);
      return newState;
    case REMOVE_FRIEND:
    let removeFriend = action.friend.friender_id;
    let newStateArr = state[action.friend.friendee_id].friendIds.filter( id => {
      return id !== removeFriend;
    });

    newState = merge({}, state);
    newState[action.friend.friendee_id].friendIds = newStateArr;

    return newState;
    case UPDATE_FRIEND:
      let requester = action.friend.friender_id;
      newState = merge({}, state);
      newState[action.friend.friendee_id].friendIds.push(requester);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
