import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const fetchComments = () => dispatch => {
  return CommentAPIUtil.fetchComments().then( comments => {
    return dispatch(receiveAllComments(comments));
  });
};

export const fetchComment = id => dispatch => {
  return CommentAPIUtil.fetchComment(id).then( comment => {
    return dispatch(receiveComment(comment));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment).then( comment => {
    return dispatch(receiveComment(comment));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const updateComment = comment => dispatch => {
  return CommentAPIUtil.updateComment(comment).then( comment => {
    return dispatch(receiveComment(comment));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const deleteComment = id => dispatch => {
  return CommentAPIUtil.deleteComment(id).then( () => {
    return dispatch(removeComment(id));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

const receiveAllComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};
