import React, { Component } from "react";
import DropDown from "./dropdown";
import PostUpdate from "./post_update_modal";
import moment from "moment";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import CommentForm from "../comment/comment_form";
import CommentList from "../comment/comment_list";
import CommentContainer from "../comment/comment_container";
import Like from "./like_post";
import ReactDOM from "react-dom";

class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePostsId: this.props.profilePostsId
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.postOwner = this.postOwner.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (
      Object.keys(this.props.posts).length < Object.keys(nextProps.posts).length
    ) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  postOwner(post) {
    console.log(this.props);
    if (post.owner === this.props.currentUser.id) {
      return (
        <div>
          <DropDown
            deletePost={this.props.deletePost}
            post={post}
            currentUser={this.props.currentUser}
            user={this.props.user}
            updatePost={this.props.updatePost}
          />
        </div>
      );
    }
  }

  renderPosts() {
    if (this.props.profilePostsId === null) {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={"#0000FF"} />
        </div>
      );
    } else {
      let posts = this.props.profilePostsId
        .sort((a, b) => a - b)
        .reverse()
        .map(id => {
          return this.props.posts[id];
        });

      return posts.map(post => {
        return (
          <li className="post-list" key={`${post.id}`}>
            <div className="post-list-container">
              <div className="entire-top-container">
                <div className="post-top-container">
                  <div className="post-top-left-container">
                    <div>
                      <img className="post-form-image" src={post.image} />
                    </div>
                    <div className="post-name-container">
                      <Link to={`/users/${post.owner}`} replace>
                        <p>{post.first_name}</p>
                      </Link>
                      <p>
                        {moment(post.created_at)
                          .format("LL")
                          .slice(0, 10)}
                      </p>
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
                <CommentContainer postId={post.id} />
                <CommentForm
                  user={this.props.user}
                  postId={post.id}
                  createComment={this.props.createComment}
                  deleteComment={this.props.deleteComment}
                />
              </div>
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return <div className="list-of-post">{this.renderPosts()}</div>;
  }
}

export default PostIndex;
