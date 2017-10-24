import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then( user => {
    return dispatch(receiveCurrentUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then( user => {
    return dispatch(receiveCurrentUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then( user => {
    return dispatch(receiveCurrentUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
