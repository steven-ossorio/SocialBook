import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';

const SessionErrorsReducer = (state, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return {};
  }
};

export default SessionErrorsReducer;
