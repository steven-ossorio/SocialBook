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
    debugger
      nextState = merge({}, state);
      nextState.currentUser = action.currentUser;
      return nextState;
    default:
      debugger
      return state;
  }
};

export default SessionReducer;
