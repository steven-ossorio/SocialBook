import React, { Component } from 'react';

class PostIndex extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    console.log(Object.values(this.props.posts));
    let arrayObj = Object.values(this.props.posts);
    console.log(arrayObj);
    let arr = [];
    arrayObj.forEach( (k, v) => {
      console.log(k.text);
      arr.push(k.text);
    });

    console.log(arr);
    let posts = arr.map( post => {
      return <li>{post}</li>;
    });
    return (
      <div>
        { posts }
        <h1>Hello there</h1>
      </div>
    );
  }
}

export default PostIndex;
