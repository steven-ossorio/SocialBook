import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';

export const createFriendship = friend => dispatch => {
  return FriendAPIUtil.createFriendship(friend).then( friend => {
    return dispatch(receiveFriend(friend));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const deleteFriendship = id => dispatch => {
  return FriendAPIUtil.deleteFriendship(id).then( () => {
    return dispatch(removePost(id));
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

const removeFriend = friendId => {
  return {
    type: REMOVE_FRIEND,
    friendId
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors
  };
};
