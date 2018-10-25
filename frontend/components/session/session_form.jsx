import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Typed from "typed.js";

class SessionForm extends Component {
  state = {
    email: "",
    password: ""
  };

  guestLogin = e => {
    e.preventDefault();

    let guestInfo = {
      email: "steven@steven.com",
      password: "steven"
    };

    const userEmail = {
      strings: ["steven@steven.com"],
      typeSpeed: 80
    };
    const userPassword = {
      strings: ["steven"],
      typeSpeed: 100
    };

    let typed = new Typed(".login-email", userEmail);

    const loggedPassword = () => {
      let typeded = new Typed(".login-password", userPassword);
    };

    const func = () => {
      const user = Object.assign({}, guestInfo);
      this.props.login(user);
    };

    setTimeout(loggedPassword, 2000);
    setTimeout(func, 3200);
  };

  update = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  submit = e => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  };

  errorsCredentials = () => {
    const { errors } = this.props;

    if (errors.length > 0) {
      return <div className="login-error">{errors[0]}</div>;
    }
  };

  render() {
    return (
      <div>
        <main className="nav-background">
          <nav className="landing-page">
            <h1 className="logo">Socialbook</h1>
            <div className="login-container">
              <form className="login-form">
                {this.errorsCredentials()}
                <div>
                  <label className="login-email-label">Email</label>
                  <input
                    type="text"
                    className="login-email"
                    onChange={this.update("email")}
                  />
                </div>
                <div>
                  <label className="login-password-label">Password</label>
                  <input
                    type="password"
                    className="login-password"
                    onChange={this.update("password")}
                  />
                </div>
                <div>
                  <button onClick={this.submit}>Log In</button>
                  <button onClick={this.guestLogin}>Guest</button>
                </div>
              </form>
            </div>
          </nav>
        </main>
      </div>
    );
  }
}

SessionForm.propTypes = {
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default withRouter(SessionForm);
