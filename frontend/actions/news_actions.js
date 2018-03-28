import * as NewsAPIUtil from '../util/news_api_util';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_NEWS_ERRORS = 'RECEIVE_NEWS_ERRORS';

export const fetchNews = () => dispatch => {
  return NewsAPIUtil.fetchNews().then( news => {
    return dispatch(receiveNews(news));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

const receiveNews = news => {
  return {
    type: RECEIVE_NEWS,
    news
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_NEWS_ERRORS,
    errors
  };
};
