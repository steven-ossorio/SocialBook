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
      
      date: new Date(),
      sex: ""
    };
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
    this.props.signup(this.state);
  }

  render() {
    console.log(this.state);
    // Months
    let months = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Days
    let days = [];
    for (let i = 1; i <= 31; i++) { days.push(i); }
    // Years
    let currentYear = new Date().getFullYear();
    let years = [];
    for (let i = currentYear; i >= 1905; i--) { years.push(i); }

    return(
      <div>
        <form>
          <input type="text" onChange={ this.update("firstName") } placeholder="First Name"></input>
          <input type="text" onChange={ this.update("lastName") } placeholder="Last Name"></input>
          <input type="text" onChange={ this.update("email") } placeholder="email"></input>
          <input type="password" onChange={ this.update("password") } placeholder="New password"></input>
          Birthday
          <select>
            months.forEach( month => {
              <option>month</option>
            })
          </select>

          <label>
            <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'male'} value='male' ></input> Female
          </label>
          <label>
            <input type="radio" onChange={ this.update('sex') } checked={ this.state.sex === 'female'} value='female' ></input> Male
          </label>
          <button onClick={ this.submit }>Create Account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
