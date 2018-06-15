import { combineReducers } from 'redux';
import SessionReducer from './session_reducers/session_reducer';
import PostReducer from './post_reducers/post_reducer';
import UserReducer from './user_reducers/user_reducer';
import NewsReducer from './news_reducer/news_reducer';
import CommentReducer from './comment_reducer/comment_reducer';
import FriendReducer from './friend_reducer/friend_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendReducer,
  errors: ErrorsReducer,
  posts: PostReducer,
  users: UserReducer,
  news: NewsReducer,
  comment: CommentReducer
});

export default RootReducer;
