import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { RingLoader, PulseLoader } from "react-spinners";
import PostDropDown from "./delete_post.jsx";
import CommentForm from "../comment/comment_form";
import CommentList from "../comment/comment_list";
import CommentContainer from "../comment/comment_container";
import Like from "../../components/post/like_post";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 10,
      loading: false,
      _isMounted: false
    };
    this.addMorePosts = this.addMorePosts.bind(this);
    this.endOfPage = this.endOfPage.bind(this);
    this.loading = this.loading.bind(this);
    this._isMounted = null;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    if (!this.props.user[this.props.currentUser.id]) {
      this.props.fetchUser(this.props.currentUser.id);
    }

    this._isMounted = true;
  }

  loading() {
    if (this.state.loading) {
      return (
        <div className="newsfeed-loading-animation">
          <PulseLoader size={30} color={"#0000FF"} />
        </div>
      );
    }
  }

  postOwner(post) {
    if (post.owner === this.props.currentUser.id) {
      return (
        <div>
          <PostDropDown deletePost={this.props.deletePost} post={post} />
        </div>
      );
    }
  }

  addMorePosts() {
    this.setState({
      endIndex: this.state.endIndex + 10,
      loading: false
    });

    this._isMounted = true;
  }

  endOfPage() {
    if (!this.state.loading) {
      $(window).scroll(() => {
        if (
          $(window).scrollTop() + $(window).height() == $(document).height() &&
          this.state.loading === false
        ) {
          if (this._isMounted) this.setState({ loading: true });
          if (this._isMounted) setTimeout(() => this.addMorePosts(), 1500);
        }
      });
    }
  }

  render() {
    if (this.props.newsfeed !== undefined) {
      let postsId = {};
      let excludeRepeat = this.props.newsfeed
        .filter(post => {
          if (!postsId[post.id]) {
            postsId[post.id] = true;
            return post;
          }
        })
        .slice(this.state.startIndex, this.state.endIndex);

      let posts = excludeRepeat.map(post => (
        <li className="post-list" key={`${post.id}`}>
          <div className="post-list-container">
            <div className="entire-top-container">
              <div className="post-top-container">
                <div className="post-top-left-container">
                  <div>
                    <img className="post-form-image" src={post.image} />
                  </div>
                  <div className="post-name-container">
                    <Link to={`users/${post.owner}`}>
                      <p>{post.first_name}</p>
                    </Link>
                    <p>{moment(post.created_at).format("LL")}</p>
                  </div>
                </div>
                {this.postOwner(post)}
              </div>
            </div>
            <p className="post-list-text">{post.text}</p>
            <Like
              unlike={this.props.unlike}
              like={this.props.like}
              postId={post.id}
              userId={this.props.currentUser.id}
              likeIds={post.likes[post.id].array}
            />

            <div className="entire-comment-container">
              {post.likes[post.id].array.length > 0 ? (
                <div className="like-count-container">
                  <i className="fa fa-thumbs-up" />{" "}
                  {post.likes[post.id].array.length}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </li>
      ));
      return (
        <div id="scroll-newsfeed" onScroll={this.endOfPage()}>
          {posts}
          {this.loading()}
        </div>
      );
    } else {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={"#0000FF"} />
        </div>
      );
    }
  }
}

export default NewsFeed;
