import { merge, omit } from "lodash";

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  UPDATE_POST
} from "../../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../../actions/like_actions";
import { RECEIVE_USER, RECEIVE_NEWSFEED } from "../../actions/user_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";

const PostReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.posts);
    case RECEIVE_NEWSFEED:
      newState = merge({}, state);
      for (let i = 0; i < action.posts.newsfeed.length; i++) {
        let current = action.posts.newsfeed[i];
        newState[current.id] = current;
      }

      return newState;
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, state);
      return omit(newState, String(action.postId));
    case RECEIVE_LIKE:
      newState = merge({}, state);
      let like = action.like.like;
      postId = like.liked_id;
      if (newState[postId]) {
        newState[postId].likes[postId].array.push(like.liker_id);
        return newState;
      }
      return newState;
    case REMOVE_LIKE:
      newState = merge({}, state);
      like = action.like.like;
      postId = like.liked_id;
      if (newState[postId]) {
        let removeIdIndex = newState[postId].likes[postId].array.indexOf(
          like.liker_id
        );
        let newArray = newState[postId].likes[postId].array.splice(
          removeIdIndex,
          1
        );
        newState[postId].likes[postId].array.concat(newArray);
      }
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
    case REMOVE_COMMENT:
      newState = merge({}, state);
      let comment = action.comment.comment;
      for (let i = 0; i < newState[comment.postId].comments.length; i++) {
        let current = newState[comment.postId].comments[i];
        if (current.id === comment.id) {
          newState[comment.postId].comments.splice(i, 1);
        }
      }
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
