import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import PostUpdate from "../post/post_update_modal";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
      editClick: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.editClick = this.editClick.bind(this);
  }

  handleClickOutside() {
    if (!this.state.editClick) {
      this.setState({
        menuActive: false
      });
    }
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  editClick() {
    let status = !this.state.editClick;
    this.setState({ editClick: status });
  }

  render() {
    debugger;
    let menu;
    if (this.state.menuActive) {
      menu = (
        <div className="post-dropdown-container">
          <ul className="post-dropdown">
            <div className="post-options">
              <li className="selection-option">
                <PostUpdate
                  editClick={this.editClick}
                  toggleMenu={this.toggleMenu}
                  post={this.props.comment}
                  currentUser={this.props.currentUser}
                  user={this.props.user}
                  updatePost={this.props.updateComment}
                />
              </li>
              <li className="selection-option">
                <button onClick={this.handleDelete}>Delete</button>
              </li>
            </div>
          </ul>
        </div>
      );
    } else {
      menu = "";
    }
    return (
      <div id="menu">
        <i className="fa fa-ellipsis-h" onClick={this.toggleMenu} />
        {menu}
      </div>
    );
  }
}

export default onClickOutside(DropDown);
