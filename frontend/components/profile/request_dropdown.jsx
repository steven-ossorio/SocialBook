import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import onClickOutside from 'react-onclickoutside';

class RequestDropDown extends Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    let menuState = !this.state.menuActive;

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

  render() {
      let list_requests;

      if(this.state.menuActive) {
        if (this.props.requests) {
          let requestors = Object.values(this.props.requests);

          list_requests = requestors.map( (user, idx ) => {
            return (
              <div className="request_list_items" key={ user.id }>
                <div className="request_list_left">
                  <img className="requestor-image" src={ user.image }></img>
                  <span className="requestor-name"><Link to={`/users/${user.id}`}>{ user.first_name } { user.last_name }</Link></span>
                </div>
                <div className="request-options">
                  <div className="selection-option"><button onClick={ () => this.props.updateFriendship(user.id) }>Accept</button></div>
                </div>
              </div>
            );
          });

          list_requests = <div>
            <div>
              <div className="arrow-up"></div>
              <p className="friend-request-text">Friend Requests</p>
              <div className="friend-request-list">{ list_requests }</div>
              <div className="friend-request-footer"></div>
            </div>
          </div>;
        } else {
          list_requests = <div>
            <div>
              <div className="arrow-up"></div>
              <p className="friend-request-text">Friend Requests</p>
              <p>No Friend Request</p>
            </div>
          </div>;
        }


      } else {
        list_requests = "";
      }
      return (
        <li id = "menu">
          <i className = "fa fa-users" onClick = { this.toggleMenu }/>

          <div className="request_list_container">
            {list_requests}
          </div>
        </li>
    );
    }
  }

export default onClickOutside(RequestDropDown);
