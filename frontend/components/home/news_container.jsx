import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news_actions';
import News from './news';

const mapStateToProps = state => {
  return {
    news: state.news.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
