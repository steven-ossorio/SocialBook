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

  temporary() {
    let ids = this.props.user.requests.filter( id => id !== this.props.currentUser.id);
    menu = ids.map( id => {
      return (
        <div key={id}>
          <ul className="request-dropdown">
            <div className="request-options">
              <li className="selection-option"><button onClick={ () => this.props.updateFriendship(id) }>Accept</button></li>
            </div>
          </ul>
        </div>
      );
    });

  }

  render() {
      let list_requests;

      if(this.state.menuActive) {
        let requestors = Object.values(this.props.requests);

        list_requests = requestors.map( (user, idx ) => {
          return (
            <div className="request_list_items" key={ user.id }>
              <div>
                <img className="requestor-image" src={ user.image }></img>
                <span className="requestor-name"><Link to={`/users/${user.id}`}>{ user.first_name }</Link></span>
              </div>
              <div className="request-options">
                <li className="selection-option"><button onClick={ () => this.props.updateFriendship(id) }>Accept</button></li>
              </div>
            </div>
          );
        });

        list_requests = <div>
          <div>
            <p className="friend-request-text">Friend Requests</p>
            { list_requests }
          </div>
        </div>;


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

export default RequestDropDown;
