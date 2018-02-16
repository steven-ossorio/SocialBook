import React from 'react';
import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const originalState = {
  currentUser: null
};

const SessionReducer = (state = originalState, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = merge({}, state);
      if (action.currentUser === null) {
        nextState.currentUser = action.currentUser;
      } else {
        nextState.currentUser = action.currentUser.id;
      }
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
