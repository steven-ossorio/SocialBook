import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';
import RequestDropDown from '../profile/request_dropdown';

class HomeNav extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (!this.props.user[this.props.currentUser.id]) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  render(){
    return(
      <main className="newsfeed-nav-container">
        <div className="newsfeed-nav-items">
          <h1 className="logo"><Link to="/" replace><i className="fa fa-facebook-official"></i></Link></h1>
          <ul className="navbar-items">
            <li>
              <img className="nav-profile-image" src={ this.props.user.image_url }></img>
              <Link to={`/users/${ this.props.currentUser.id}` }>{ this.props.user.firstName }</Link>
            </li>
            <li><Link to="/" replace>Home</Link></li>
            <RequestDropDown requests={ this.props.requests } currentUser={ this.props.currentUser } user={ this.props.user } updateFriendship={ this.props.updateFriendship } />
            <li className="hidden-element"><i className="fa fa-comments"></i></li>
            <li className="hidden-element"><i className="fa fa-globe"></i></li>
            <li className="hidden-element"><i className="fa fa-question-circle"></i></li>
            <li><DropDown logout={ this.props.logout } /></li>
          </ul>
        </div>
      </main>
    );
  }
}

export default HomeNav;
