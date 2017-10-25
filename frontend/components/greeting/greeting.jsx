import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return(
        <div>
          <h1>Welcome back, { this.props.currentUser.firstName }</h1>
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

export default Greeting;
