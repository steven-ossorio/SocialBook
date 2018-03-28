import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_NEWS } from '../../actions/news_actions';

const NewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS:
      return merge({}, state, action.news);
    default:
      return state;
  }
};

export default NewsReducer;
