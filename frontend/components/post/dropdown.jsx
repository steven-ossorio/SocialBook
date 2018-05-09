import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import onClickOutside from 'react-onclickoutside';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickOutside() {
    this.setState({
      menuActive: false
    });
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
        menu = <div className="post-dropdown-container">
                  <ul className="post-dropdown">
                    <div className="post-options">
                      <li className="selection-option"><button onClick={ this.handleDelete } >Delete</button></li>
                    </div>
                  </ul>
                </div>;
      } else {
        menu = "";
      }
      return (
        <div id = "menu">
          <i className = "fa fa-ellipsis-h" onClick = { this.toggleMenu }/>
          {menu}
      </div>
    );
    }
  }

export default onClickOutside(DropDown);
