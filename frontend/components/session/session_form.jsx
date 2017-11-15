import React, { Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.errorsCredentials = this.errorsCredentials.bind(this);
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  guestLogin(e) {
    let guestInfo = {
      email: 'steven@steven.com',
      password: 'steven'
    };

    const userEmail = {
      strings: "steven@steven.com",
      typeSpeed: 100
    };

    new Typed('.login-email', userEmail);
    
    e.preventDefault();
    const user = Object.assign({}, guestInfo);
    this.props.login(user);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  submit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  errorsCredentials() {
    if (this.props.errors.length > 0) {
      return <div className="login-error">{ this.props.errors[0] }</div>;
    }
  }

  render() {
    const errors = this.props.errros;
    return (
      <div>
        <main className="nav-background">
          <nav className="landing-page">
            <h1 className="logo">Socialbook</h1>
            <form className="login-form">
              { this.errorsCredentials() }
              <div>
                <label className="login-email-label">Email</label>
                <input type="text" className="login-email" onChange={ this.update('email') } ></input>
              </div>
              <div>
                <label className="login-password-label">Password</label>
                <input type="password" className="login-password" onChange={ this.update('password')}></input>
                <button className="login-button" onClick={ this.submit }>Log In</button>
              </div>
              <div>
              </div>
            </form>
            <button className="guest-login" onClick={ this.guestLogin }>Guest</button>
          </nav>
        </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
