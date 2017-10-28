import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = Object.assign({}, this.props.post);
    this.onSubmit = this.onSubmit.bind(this);
    this.update = this.update.bind(this);
    console.log(this.state);
  }

  update(field) {
    console.log(this.state);
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div>
          <form>
            <input type="text" onChange={ this.update('text') }></input>
            <button onClick={ this.onSubmit }>Create</button>
          </form>
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
