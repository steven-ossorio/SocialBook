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
        console.log(news);
        return (
          <li key={ i } className="article-container">
            <a href={ news.url } >
              <div className="news-title">
                <i class="fa fa-fire"></i>
                { news.title.slice(0, 50) }
                <span>
                  - { news.source.name }
                </span>
              </div>
            </a>
            <div className="on-hover-article">
              <p>HELLO!</p>
            </div>
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
      <div className="news-container">
        <p>Trending</p>
        { this.renderNews() }
      </div>
    );
  }
}

export default News;
