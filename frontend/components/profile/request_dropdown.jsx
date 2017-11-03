import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class RequestDropDown extends Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
      let menu;
      if(this.state.menuActive) {
        let ids = this.props.user.requests.filter( id => id !== this.props.currentUser.id);
        menu = ids.map( id => {
          return (
            <div>
              <ul className="logout-dropdown">
                <div className="logout-container">
                  <li><button onClick={ () => this.props.updateFriendship(id) }>Accept</button></li>
                </div>
              </ul>
            </div>
          );
        });


        // menu = <div>
        //           <ul className="logout-dropdown">
        //             <div className="logout-container">
        //               <li>Hello</li>
        //             </div>
        //           </ul>
        //         </div>;
      } else {
        menu = "";
      }
      return (
        <div id = "menu">
          <i className = "fa fa-users" onClick = { this.toggleMenu }/>
          {menu}
      </div>
    );
    }
  }

export default RequestDropDown;
