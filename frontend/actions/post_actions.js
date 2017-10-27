import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then( posts => {
    return dispatch(receiveAllPosts(posts));
  });
};

export const fetchPost = id => dispatch => {
  return PostAPIUtil.fetchPost(id).then( post => {
    return dispatch(receivePost(post));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then( post => {
    return dispatch(receivePost(post));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const updatePost = post => dispatch => {
  return PostAPIUtil.updatePost(post).then( post => {
    return dispatch(receivePost(post));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const deletePost = id => dispatch => {
  return PostAPIUtil.deletePost(id).then( post => {
    return dispatch(removePost(post.id));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};
