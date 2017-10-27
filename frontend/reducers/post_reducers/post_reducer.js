import React from 'react';
import merge from 'lodash';

import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../../actions/post_actions';

const originalState = {
  text: ""
};

const PostReducer = (state = originalState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      nextState = merge({}, state);
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default PostReducer;
