import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = this.props.post;
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div>
          <h1>Posting form</h1>
        </div>
      );
    } else {
      return (
        <div>
          goodbye
        </div>
      );
    }
  }
}

export default PostForm;
