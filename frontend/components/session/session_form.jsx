import React, { Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

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

  render() {
    const errors = this.props.errors.map( (error, idx) => {
      return <li key={ idx }>{error}</li>;
    });
    return (
      <div>
        <main className="nav-background">
          <nav className="landing-page">
            <h1 className="logo">Socialbook</h1>
            <form className="login-form">
              <div>
                <label className="login-email-label">Email</label>
                <input type="text" className="login-email" onChange={ this.update('email') } ></input>
              </div>
              <div>
                <label>Password</label>
                <input type="password" className="login-password" onChange={ this.update('password')}></input>
                <Link to="/">Forgot account?</Link>
              </div>
              <button className="login-button" onClick={ this.submit }>Log In</button>
            </form>
          </nav>
        </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
