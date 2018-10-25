import { connect } from "react-redux";
import {
  fetchNews,
  fetchTechnologyNews,
  fetchBusinessNews,
  fetchScienceNews,
  fetchSportNews
} from "../../actions/news_actions";
import News from "./news";

const mapStateToProps = state => {
  let news = state.news.articles ? state.news.articles : [];
  return {
    news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    fetchTechnologyNews: () => dispatch(fetchTechnologyNews()),
    fetchBusinessNews: () => dispatch(fetchBusinessNews()),
    fetchScienceNews: () => dispatch(fetchScienceNews()),
    fetchSportNews: () => dispatch(fetchSportNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
