import { merge, omit } from "lodash";
import { RECEIVE_USER, RECEIVE_NEWSFEED } from "../../actions/user_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_POST } from "../../actions/post_actions";

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
    case RECEIVE_NEWSFEED:
      newState = merge({}, state);
      posts = action.posts;
      if (posts) {
        for (let i = 0; i < posts.newsfeed.length; i++) {
          let current = posts.newsfeed[i];
          newState[current.id] = action.posts.newsfeed[i].comments;
        }
      }
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      let postId = action.comment.comment.postId;
      let found = false;
      for (let i = 0; i < newState[postId].length; i++) {
        let currentComment = newState[postId][i];
        if (currentComment.id === action.comment.comment.id) {
          currentComment.text = action.comment.comment.text;
          found = true;
        }
      }
      !found ? newState[postId].push(action.comment.comment) : "";

      return newState;
    case RECEIVE_POST:
      newState = merge({}, state);
      let post = action.post;
      if (post) {
        newState[post.id] = post.comments;
      }
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      let comment = action.comment.comment;
      for (let i = 0; i < newState[comment.postId].length; i++) {
        let current = newState[comment.postId][i];
        if (current.id === comment.id) {
          newState[comment.postId].splice(i, 1);
        }
      }
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
