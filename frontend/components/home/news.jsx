import React,{ Component } from 'react';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

class News extends Component {
  constructor(props) {
    super(props);
    this.renderNews = this.renderNews.bind(this);
  }
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews() {
    if (this.props.news) {
      let news = this.props.news;
      return news.map( (news, i) => {
        return (
          <li key={ i }>
            <a href={ news.url } >
              <div className="news-title">
                { news.title.slice(0, 30) }
              </div>
              <div className="article-owner">
                { news.source.name }
              </div>
            </a>
          </li>
        );
      });
    } else {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={'#0000FF'} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderNews() }
      </div>
    );
  }
}

export default News;
