import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSize: "150px",
      visible: "visible"
    };

    this.renderNews = this.renderNews.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.fetchBusinessNews = this.fetchBusinessNews.bind(this);
  }
  componentDidMount() {
    this.props.fetchNews();
  }

  changeStyle() {
    this.setState({
      newsSize: "300px",
      visible: "hidden"
    });
  }

  fetchBusinessNews() {
    this.props.fetchBusinessNews();
  }

  renderNews() {
    if (this.props.news) {
      let news = this.props.news;
      return news.map((news, i) => {
        return (
          <div key={i} className="rss-feed-index-item">
            <i className="fa fa-fire" />
            <div className="rss-feed-item-right-side">
              <a
                className="rss-feed-item-anchor-tag"
                href={news.url}
                target="_blank"
              >
                <div className="rss-feed-item-title">{news.title}</div>
                <div className="rss-feed-item-description" />
              </a>
            </div>
            {/* <a href={news.url}>
              <div className="news-title">
                {news.title.slice(0, 50)}
                <span>- {news.source.name}</span>
              </div>
            </a> */}
          </div>
        );
      });
    } else {
      return (
        <div className="new-loading-spin">
          <RingLoader size={20} color={"#0000FF"} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="rss-feed-container">
        <div className="rss-feed-header">
          <div className="rss-feed-header-title">Trending</div>
          <div className="rss-feed-header-right">
            <i className="fa fa-line-chart" />
            <i className="fa fa-university" />
            <i className="fa fa-flask" />
            <i className="fa fa-futbol-o" />
            <i className="fa fa-gamepad" />
          </div>
        </div>
        {news}
        {/* <div
          style={{ maxHeight: this.state.newsSize }}
          className="news-list-container"
        >
          {this.renderNews()}
        </div>
        <a
          className="news-button"
          style={{ visibility: this.state.visible }}
          onClick={() => this.changeStyle()}
        >
          See More
        </a> */}
      </div>
    );
  }
}

export default News;
