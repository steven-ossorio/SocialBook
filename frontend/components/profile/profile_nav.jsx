import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileNav extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <main className="newsfeed-nav-container">
          <div className="newsfeed-nav-items">
            <Link to="/"><h1 className="logo"><i className="fa fa-facebook-official"></i></h1></Link>
            <ul className="navbar-items">
              <li>
                <img className="nav-profile-image" src={ this.props.currentUser.image_url }></img>
                <Link to={`/users/${ this.props.currentUser.id}` }>{ this.props.currentUser.firstName }</Link>
              </li>
              <li>Home</li>
              <li><i className="fa fa-users"></i></li>
              <li><i className="fa fa-comments"></i></li>
              <li><i className="fa fa-globe"></i></li>
              <li><i className="fa fa-question-circle"></i></li>
              <li><i className="fa fa-arrow-circle-down"></i></li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfileNav;
