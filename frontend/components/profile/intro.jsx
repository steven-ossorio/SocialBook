import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          <div className="intro-container">
            <div className="intro-header">
              <div className="intro-header-icon">
                <i className="fa fa-globe" aria-hidden="true" />
              </div>
              <p>Intro</p>
            </div>
            <div className="intro-description">
              <p>
                <i className="fa fa-home" />Lives in{" "}
                <span>{this.props.user.current_location}</span>
              </p>
              <p>
                <i className="fa fa-map-marker" />From{" "}
                <span>{this.props.user.home_location}</span>
              </p>
              <p>
                <i className="fa fa-graduation-cap" />Studied{" "}
                {this.props.user.major} at{" "}
                <span> {this.props.user.school}</span>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="intro-container">
            <div className="intro-header">
              <div className="intro-header-icon">
                <i className="fa fa-globe" aria-hidden="true" />
              </div>
              <p>Intro</p>
              <div className="loading-spin">
                <RingLoader size={20} color={"#0000FF"} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Intro;
