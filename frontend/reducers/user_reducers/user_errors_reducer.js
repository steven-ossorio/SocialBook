import { RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_SESSION_ERRORS } from '../../actions/user_actions';

const UserErrorsReducer = (state, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_ALL_USERS:
      return {};
    case RECEIVE_USER:
      return {};
    default:
      return {};
  }
};

export default UserErrorsReducer;
