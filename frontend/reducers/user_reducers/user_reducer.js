import React from 'react';
import { merge, omit } from 'lodash';

import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';

const UserReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      newState = merge({}, state, { [action.user.id]: action.user });
      newState.friends = action.friends;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
