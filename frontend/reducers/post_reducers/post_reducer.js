import { merge, omit } from "lodash";

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from "../../actions/post_actions";
import { RECEIVE_LIKE } from "../../actions/like_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_COMMENT } from "../../actions/comment_actions";

const PostReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.posts);
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, state);
      return omit(newState, String(action.postId));
    case RECEIVE_LIKE:
      newState = merge({}, state);
      let like = action.like.like;
      postId = like.liked_id;
      newState[postId].likes[postId].array.push(like.liker_id);
      debugger;
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      let postId = action.comment.comment.postId;
      let post = newState[postId];
      let comments = post.comments;
      if (!comments.includes(action.comment.comment.id)) {
        newState[postId].comments.push(action.comment);
      }
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
