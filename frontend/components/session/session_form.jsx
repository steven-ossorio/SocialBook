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

    return (
      <div>
        <form>
          <input onChange={ this.update('email') } ></input>
          <input onChange={ this.update('password')}></input>
          <button onClick={ this.submit }>Log In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
