import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { RingLoader, PulseLoader } from "react-spinners";
import PostDropDown from "./delete_post.jsx";
import CommentForm from "../comment/comment_form";
import CommentContainer from "../comment/comment_container";
import Like from "../../components/post/like_post";

class NewsFeed extends Component {
  state = {
    startIndex: 0,
    endIndex: 10,
    loading: false,
    _isMounted: false
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    const { user, currentUser, fetchUser } = this.props;

    if (!user[currentUser.id]) {
      fetchUser(currentUser.id);
    }

    this._isMounted = true;
  }

  loading = () => {
    if (this.state.loading) {
      return (
        <div className="newsfeed-loading-animation">
          <PulseLoader size={30} color={"#0000FF"} />
        </div>
      );
    }
  };

  postOwner = post => {
    const { currentUser, deletePost, user, updatePost } = this.props;

    if (post.owner === currentUser.id) {
      return (
        <div>
          <PostDropDown
            deletePost={deletePost}
            post={post}
            currentUser={currentUser}
            user={user}
            updatePost={updatePost}
          />
        </div>
      );
    }
  };

  addMorePosts = () => {
    this.setState({
      endIndex: this.state.endIndex + 10,
      loading: false
    });

    this._isMounted = true;
  };

  endOfPage = () => {
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
  };

  render() {
    const {
      newsfeed,
      unlike,
      like,
      currentUser,
      user,
      createComment
    } = this.props;

    if (newsfeed !== undefined) {
      let postsId = {};
      let excludeRepeat = newsfeed
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
              unlike={unlike}
              like={like}
              postId={post.id}
              userId={currentUser.id}
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
              <CommentContainer postId={post.id} />
              <CommentForm
                user={user}
                postId={post.id}
                createComment={createComment}
              />
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
