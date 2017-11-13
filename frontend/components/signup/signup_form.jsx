import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: "",
      month: new Date().toDateString().slice(4, 7),
      day: new Date().getDate(),
      year: new Date().getFullYear() - 18,
      sex: "",
      errors: Object.assign({}, this.props.errors)
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.errorsFirstName = this.errorsFirstName.bind(this);
    this.errorsLastName = this.errorsLastName.bind(this);
    this.errorsEmail = this.errorsEmail.bind(this);
    this.errorsPassword = this.errorsPassword.bind(this);
    this.errorsSex = this.errorsSex.bind(this);
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
    let month = this.state.month;
    let day = this.state.day;
    let year = this.state.year;
    let dob = month + " " + day + " "+ year;

    let user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      dob,
      sex: this.state.sex,
      password: this.state.password
    };

    this.props.signup(user);
  }

  // errorsString(propName) {
  //   if (this.props.errors[propName]) {
  //     return <div>{`${propName} ${this.props.errors[propName]}`}</div>
  //   }
  // }

  errorsFirstName(propName) {
    if (this.props.errors[propName]) {
      return <div className="signup-form-first-name-error"> First name { this.props.errors[propName] }</div>;
    }
  }

  errorsLastName(propName) {
    if (this.props.errors[propName]) {
      return <div className="signup-form-last-name-error"> Last name { this.props.errors[propName] }</div>;
    }
  }

  errorsEmail(propName) {
    if (this.props.errors[propName]) {
      return <div className="signup-form-email-error">Email { this.props.errors[propName] }</div>;
    }
  }

  errorsPassword(propName) {
    if (this.props.errors[propName]) {
      return <div className="signup-form-password-error">Password { this.props.errors[propName] }</div>;
    }
  }

  errorsSex(propName) {
    if (this.props.errors[propName]) {
      return <div className="signup-form-sex-error">Selection { this.props.errors[propName] }</div>;
    }
  }

  render() {
    // Errors
    const errors = this.props.errors;
    // Months
    let months = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months = months.map( (month, idx) => {
      if (new Date().toDateString().slice(4, 7) === month) {
        return <option key={idx} >{ month }</option>;
      }
      return <option key={idx}>{month}</option>;
    });


    // Days
    let days = [];
    for (let i = 1; i <= 31; i++) { days.push(i); }

    days = days.map( (day, idx) => {
      if (new Date().getDate() === day) {
        return <option key={idx} >{ day }</option>;
      }
      return <option key={idx}>{ day }</option>;
    });


    // Years
    let currentYear = new Date().getFullYear();
    let years = [];
    for (let i = currentYear; i >= 1905; i--) { years.push(i); }

    years = years.map( (year, idx) => {
      if (currentYear - 18 === year) {
        return <option key={idx} >{ year }</option>;
      }
      return <option key={idx}>{ year }</option>;
    });


    return(
      <div className="login-page-background-color">
        <div className="form-background">
          <section className="landing-page-left-section">
            <div className="company-goal-message">
              <p>Connect with friends and the world around you on Facebook.</p>
            </div>
            <div className="photo-icon-description">
              <div className="photo-icon"></div>
              <p>See photos and updates</p>
              <p> from friends in News Feed.</p>
            </div>
            <div className="photo-icon-description">
              <div className="share-icon"></div>
              <p className="bold">Share what's new</p>
              <p>in your life on your Timeline.</p>
            </div>
            <div className="photo-icon-description">
              <div className="search-icon"></div>
              <p>Find more</p>
              <p>of what you're looking for with Facebook Search.</p>
            </div>
          </section>
          <main className="signup-form-layout">
            <section className="form-heading">
              <h1 className="signup-text">Sign Up</h1>
              <h2 className="signup-text-two">It's free and always will be.</h2>
            </section>
            <form className="signup-form">
              <div className="signup-form-name">
                <div className='signup-first-name-container'>
                  { this.errorsFirstName('first_name') }
                  <input className="signup-first-name" type="text" onChange={ this.update("firstName") } placeholder="First name"></input>
                </div>
                <div className='signup-last-name-container'>
                  { this.errorsLastName('last_name') }
                  <input className="signup-last-name" type="text" onChange={ this.update("lastName") } placeholder="Last name">{ this.state.errors.last_name }</input>
                </div>
              </div>
              <div className="signup-email-container">
                { this.errorsEmail('email') }
                <input className="signup-email" type="text" onChange={ this.update("email") } placeholder="email"></input>
              </div>
              <div className="signup-password-container">
                { this.errorsPassword('password') }
                <input className="signup-password" type="password" onChange={ this.update("password") } placeholder="New password"></input>
              </div>
              <p className="signup-birthday-text">Birthday</p>
              <div className="signup-birthday-section">
                <select className="signup-birthday" value={ this.state.month } onChange={ this.update('month') } >
                  { months }
                </select>
                <select className="signup-birthday" value={ this.state.day } onChange={ this.update('day') }>
                  { days }
                </select>
                <select className="signup-birthday" value={ this.state.year } onChange={ this.update('year') }>
                  { years }
                </select>
                <p className="birthday-requiremenr">Why do I need to provide my birthday?</p>
              </div>
              <br />
              <div className="signup-sex-container">
                { this.errorsSex('sex') }
                <label>
                  <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'female'} value='female' ></input> Female
                </label>
                <label>
                  <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'male'} value='male' ></input> Male
                </label>
              </div>
              <br />
              <div className="terms-to-agree">
                <p>By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.
                  You may receive SMS Notifications from Facebook and can opt out at any time.</p>
              </div>
              <button className="signup-button" onClick={ this.submit }>Create Account</button>
              <hr />
            </form>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
