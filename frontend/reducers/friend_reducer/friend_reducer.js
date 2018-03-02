import React from 'react';
import { merge, omit } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FRIEND, UPDATE_FRIEND } from '../../actions/friend_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

const FriendReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser === null) {
        nextState = state;
      } else {
        nextState = merge({}, state, { requests: action.currentUser.requests } );
      }
      return nextState;
    case RECEIVE_USER:
      nextState = merge({}, state, { requests: action.friend_requests} );
      return nextState;
    case UPDATE_FRIEND:
      nextState = merge({}, state);
      delete nextState.requests[action.friend.friender_id];
      debugger
      return nextState;
    default:
      return state;
  }
};

export default FriendReducer;
