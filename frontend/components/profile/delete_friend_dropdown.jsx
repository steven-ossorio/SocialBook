import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
      let menu;
      if(this.state.menuActive) {
        menu = <div className="post-dropdown-container" onMouseLeave= { this.toggleMenu }>
                  <ul className="post-dropdown">
                    <div className="post-options">
                      <li className="selection-option"><button onClick={ () => this.props.deleteFriendship(this.props.user.id) } className="adding-friend">Unfriend</button></li>
                    </div>
                  </ul>
                </div>;
      } else {
        menu = "";
        // <button onClick={ () => this.props.deleteFriendship(this.props.user.id) } className="adding-friend">Unfriend</button>
      }
      return (
        <div id = "menu">
          <div onMouseEnter = { this.toggleMenu }>
            <i className = "fa fa-check"/> <span>Friends</span><i class="fa fa-caret-down"/>
          </div>
          {menu}
        </div>
    );
    }
  }

export default DropDown;
