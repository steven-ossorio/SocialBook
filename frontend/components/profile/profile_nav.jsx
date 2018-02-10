import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../home/dropdown';
import RequestDropDown from './request_dropdown';

class ProfileNav extends Component {
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
      <nav className="newsfeed-nav-container">
        <div className="newsfeed-nav-items">
          <Link to="/"><h1><i className="fa fa-facebook-official"></i></h1></Link>
          <ul className="navbar-items">
            <li>
              <img className="nav-profile-image" src={ this.props.user.image_url }></img>
              <Link to={`/users/${ this.props.currentUser.id}` } replace>{ this.props.user.firstName }</Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <RequestDropDown currentUser={ this.props.currentUser } user={ this.props.user } updateFriendship={ this.props.updateFriendship } />
            <li className="hidden-element"><i className="fa fa-comments"></i></li>
            <li className="hidden-element"><i className="fa fa-globe"></i></li>
            <li className="hidden-element"><i className="fa fa-question-circle"></i></li>
            <li><DropDown logout={ this.props.logout } history={ this.props.history } /></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProfileNav;
