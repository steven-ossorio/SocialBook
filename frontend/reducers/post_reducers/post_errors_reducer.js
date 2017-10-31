import { RECEIVE_POST_ERRORS } from '../../actions/post_actions';

const PostErrors = (state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      // if (action.errors.responseJSON) {
      return action.errors.responseJSON;
      // }
      // return {};
    default:
      return {};
  }
};

export default PostErrors;
