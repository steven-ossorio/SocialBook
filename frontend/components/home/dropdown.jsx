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

    this.handleLogout = this.handleLogout.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  handleLogout() {
    this.props.logout();
  }

  render() {
      let menu;
      if(this.state.menuActive) {
        menu = <div>
                  <ul className="logout-dropdown">
                    <div className="logout-container">
                      <li><Link to='/' onClick={ this.handleLogout } replace >Logout</Link></li>
                    </div>
                  </ul>
                </div>;
      } else {
        menu = "";
      }
      return (
        <div id = "menu">
          <i className = "fa fa-arrow-down" onClick = { this.toggleMenu }/>
          {menu}
      </div>
    );
    }
  }

export default onClickOutside(DropDown);
