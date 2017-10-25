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
      sex: ""
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
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

  render() {
    // Months
    let months = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months = months.map( (month, idx) => {
      if (new Date().toDateString().slice(4, 7) === month) {
        return <option key={idx} ></option>;
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
      <div>
        <form>
          <input type="text" onChange={ this.update("firstName") } placeholder="First Name"></input>
          <input type="text" onChange={ this.update("lastName") } placeholder="Last Name"></input>
          <input type="text" onChange={ this.update("email") } placeholder="email"></input>
          <input type="password" onChange={ this.update("password") } placeholder="New password"></input>
          Birthday
          <select value={ this.state.month } onChange={ this.update('month') } >
            { months }
          </select>
          <select value={ this.state.day } onChange={ this.update('day') }>
            { days }
          </select>
          <select value={ this.state.year } onChange={ this.update('year') }>
            { years }
          </select>

          <label>
            <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'female'} value='female' ></input> Female
          </label>
          <label>
            <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'male'} value='male' ></input> Male
          </label>
          <button onClick={ this.submit }>Create Account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
