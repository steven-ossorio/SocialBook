import React from 'react';
import { merge, omit } from 'lodash';

import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../../actions/post_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const PostReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    debugger
      return merge({}, state, action.posts);
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, state);
      return omit(newState, action.postId);
    default:
      return state;
  }
};

export default PostReducer;
