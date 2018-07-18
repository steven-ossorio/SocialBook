import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const like = data => dispatch => {
  return LikeAPIUtil.like(data).then(
    like => {
      return dispatch(receiveLike(like));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const unlike = id => dispatch => {
  return LikeAPIUtil.unlike(id).then(
    like => {
      return dispatch(removeLike(like));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_LIKE_ERRORS,
    errors
  };
};
