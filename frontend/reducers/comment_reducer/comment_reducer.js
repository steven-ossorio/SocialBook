import { merge, omit } from "lodash";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_COMMENT } from "../../actions/comment_actions";

const CommentReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state);
      let posts = action.posts;
      if (posts) {
        Object.keys(posts).forEach(postKey => {
          newState[postKey] = action.posts[postKey].comments;
        });
      }
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      let postId = action.comment.comment.postId;
      newState[postId].push(action.comment.comment);
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
