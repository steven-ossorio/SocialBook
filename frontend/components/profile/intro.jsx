import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <div className="intro-container">
          <div className="intro-header">
            <div className="intro-header-icon">
              <i className="fa fa-globe" aria-hidden="true"></i>
            </div>
            <p>Intro</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
