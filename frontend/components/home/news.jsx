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
    this.fetchNews = this.fetchNews.bind(this);
    this.fetchBusinessNews = this.fetchBusinessNews.bind(this);
    this.fetchScienceNews = this.fetchScienceNews.bind(this);
    this.fetchSportNews = this.fetchSportNews.bind(this);
    this.fetchTechnologyNews = this.fetchTechnologyNews.bind(this);
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

  fetchNews() {
    this.props.fetchNews();
  }

  fetchBusinessNews() {
    this.props.fetchBusinessNews();
  }

  fetchScienceNews() {
    this.props.fetchScienceNews();
  }

  fetchSportNews() {
    this.props.fetchSportNews();
  }

  fetchTechnologyNews() {
    this.props.fetchTechnologyNews();
  }

  renderNews() {
    if (this.props.news) {
      let news = this.props.news.splice(10, 10);
      return news.map((news, i) => {
        return (
          <div key={i} className="rss-feed-index-item">
            <div className="rss-feed-item-right-side">
              <a
                className="rss-feed-item-anchor-tag"
                href={news.url}
                target="_blank"
              >
                <div className="rss-feed-item-title">{news.title}</div>
                <div className="rss-feed-item-description">
                  {news.description}
                </div>
              </a>
            </div>
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
            <i onClick={this.fetchNews} className="fa fa-line-chart" />
            <i onClick={this.fetchBusinessNews} className="fa fa-university" />
            <i onClick={this.fetchScienceNews} className="fa fa-flask" />
            <i onClick={this.fetchSportNews} className="fa fa-futbol-o" />
            <i onClick={this.fetchTechnologyNews} className="fa fa-gamepad" />
          </div>
        </div>
        {this.renderNews()}
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
