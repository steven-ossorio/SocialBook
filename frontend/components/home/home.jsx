import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import SignUpFormContainer from '../signup/signup_form_container';

class Home extends Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return(
        <div>
          <main className="newsfeed-nav-container">
            <div className="newsfeed-nav-items">
              <h1 className="logo"><Link to="/"><i className="fa fa-facebook-official"></i></Link></h1>
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
          <h1>Welcome back, { this.props.currentUser.firstName }</h1>
          <Link to={`/users/${ this.props.currentUser.id}` }>Profile</Link>
          <img src={ this.props.currentUser.image_url }></img>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <SessionFormContainer />
          <SignUpFormContainer />
        </div>
      );
    }
  }
}

export default Home;
