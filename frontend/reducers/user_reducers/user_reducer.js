import React from 'react';
import { merge, omit } from 'lodash';

import { RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_NEWSFEED } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FRIEND, REMOVE_FRIEND, UPDATE_FRIEND } from '../../actions/friend_actions';
import { REMOVE_POST, RECEIVE_POST } from '../../actions/post_actions';

const UserReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_NEWSFEED:
      return merge({}, state, { newsfeed: action.posts.newsfeed });
    case RECEIVE_USER:
      newState = merge({}, state, { [action.user.id]: action.user });
      newState.friends = action.friends || {};
      return newState;
    case RECEIVE_POST:
      newState = merge({}, state);
      newState.newsfeed.unshift(action.post);
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      let key = Object.keys(newState)[0];
      let location = newState[key].profilePostsId.indexOf(action.postId);
      newState[key].profilePostsId = newState[key].profilePostsId.slice(0, location).concat(newState[key].profilePostsId.slice(location + 1));

      if (newState.newsfeed) {
        let newsfeed = newState.newsfeed;
        for (let i = 0; i < newsfeed.length; i++) {
          if (newsfeed[i].id === action.postId) {
            newState.newsfeed = newState.newsfeed.slice(0, i).concat(newState.newsfeed.slice(i + 1));
          }
        }
      }

      return newState;
    case RECEIVE_FRIEND:
      let friendee = action.friend.friendee_id;
      newState = merge({}, state);
      newState[friendee].requests.push(action.friend.friender_id);
      return newState;
    case REMOVE_FRIEND:
    let removeFriend;
    let currentUser;
    newState = merge({}, state);

    if (action.friend.type === "friendee") {
      removeFriend = action.friend.removed_friendship.friender_id;
      currentUser = action.friend.removed_friendship.friendee_id;
    } else if (action.friend.type === "friender") {
      removeFriend = action.friend.removed_friendship.friendee_id;
      currentUser = action.friend.removed_friendship.friender_id;
    }
    if (state[currentUser]) {
      let currentUserFriends = state[currentUser].friendIds.filter( id => {
        return id !== removeFriend;
      });
      newState[currentUser].friendIds = currentUserFriends;
    }

    let removedFriend  = state[removeFriend].friendIds.filter( id => {
      return id !== currentUser;
    });

    newState[removeFriend].friendIds = removedFriend;

    return newState;

    case UPDATE_FRIEND:
      let requester = action.friend.friender_id;
      newState = merge({}, state);
      newState[action.friend.friendee_id].friendIds.push(requester);
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.users === undefined) {
        return state;
      }
      break;
    default:
      return state;
  }
};

export default UserReducer;
