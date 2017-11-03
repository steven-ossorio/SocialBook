import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const createFriendship = friend => dispatch => {
  return FriendAPIUtil.createFriendship(friend).then( friend => {
    return dispatch(receiveFriend(friend));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const updateFriendship = friend => dispatch => {
  return FriendAPIUtil.updateFriendship(friend).then( friend => {
    return dispatch(updateFriend(friend));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const deleteFriendship = friend => dispatch => {
  debugger
  return FriendAPIUtil.deleteFriendship(friend).then( friend => {
    return dispatch(removeFriend(friend));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};


const receiveFriend = friend => {
  return {
    type: RECEIVE_FRIEND,
    friend
  };
};

const updateFriend = friend => {
  return {
    type: UPDATE_FRIEND,
    friend
  };
};

const removeFriend = friend => {
  return {
    type: REMOVE_FRIEND,
    friend
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors
  };
};
