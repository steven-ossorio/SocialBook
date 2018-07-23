import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_NEWS_ERRORS = "RECEIVE_NEWS_ERRORS";

export const fetchNews = () => dispatch => {
  return NewsAPIUtil.fetchNews().then(
    news => {
      return dispatch(receiveNews(news));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const fetchBusinessNews = () => dispatch => {
  return NewsAPIUtil.fetchBusinessNews().then(
    news => {
      return dispatch(receiveNews(news));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const fetchTechnologyNews = () => dispatch => {
  return NewsAPIUtil.fetchTechnologyNews().then(
    news => {
      return dispatch(receiveNews(news));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const fetchSportNews = () => dispatch => {
  return NewsAPIUtil.fetchSportNews().then(
    news => {
      return dispatch(receiveNews(news));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const fetchScienceNews = () => dispatch => {
  return NewsAPIUtil.fetchScienceNews().then(
    news => {
      return dispatch(receiveNews(news));
    },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
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
