import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';

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
          <h1 className="logo"><Link to="/"><i className="fa fa-facebook-official"></i></Link></h1>
          <ul className="navbar-items">
            <li>
              <img className="nav-profile-image" src={ this.props.user.image_url }></img>
              <Link to={`/users/${ this.props.currentUser.id}` }>{ this.props.user.firstName }</Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li className="hidden-element"><i className="fa fa-users"></i></li>
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
