import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_NEWSFEED = 'RECEIVE_NEWSFEED';

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then( users => {
    return dispatch(receiveAllUsers(users));
  });
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then( user => {
    return dispatch(receiveUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const updateUser = (user, id) => dispatch => {
  return UserAPIUtil.updateUser(user, id).then( user => {
    return dispatch(receiveUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const fetchNewsFeed = () => dispatch => {
  return UserAPIUtil.newsFeed().then( posts => {
    return dispatch(receiveNewsFeed(posts));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
}


const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveUser = ({user, posts, friends, friend_requests}) => {
  return {
    type: RECEIVE_USER,
    user,
    posts,
    friends,
    friend_requests
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

const receiveNewsFeed = posts => {
  return {
    type: RECEIVE_NEWSFEED,
    posts
  }
}
