import React from 'react';
import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
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
    default:
      return state;
  }
};

export default FriendReducer;
