import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return(
        <div>
          <main className="nav-background">
            <nav className="landing-page">
              <h1 className="logo">Socialbook</h1>
              <form className="login-form">
                <div>
                  <label className="login-email-label">Email</label>
                  <input type="text" className="login-email" ></input>
                </div>
                <div>
                  <label className="login-password-label">Password</label>
                  <input type="password" className="login-password"></input>
                  <button className="login-button">Log In</button>
                </div>
              </form>
            </nav>
          </main>
          <h1>Welcome back, { this.props.currentUser.firstName }</h1>
          <Link to={`/users/${ this.props.currentUser.id}`}>Profile</Link>
          <img src={ this.props.currentUser.image_url }></img>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default Home;
