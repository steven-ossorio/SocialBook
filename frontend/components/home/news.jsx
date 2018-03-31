import React,{ Component } from 'react';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSize: '150px'
    };

    this.renderNews = this.renderNews.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  componentDidMount() {
    this.props.fetchNews();
  }

  changeStyle(){
    this.setState({
      newsSize: '300px'
    });
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
                <i className="fa fa-fire"></i>
                { news.title.slice(0, 50) }
                <span>
                  - { news.source.name }
                </span>
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
      <div className="news-container">
        <p>Trending</p>
        <div style={{ maxHeight: this.state.newsSize }} className="news-list-container">
          { this.renderNews() }
        </div>
        <button onClick={ () => this.changeStyle() }>See More</button>
      </div>
    );
  }
}

export default News;
