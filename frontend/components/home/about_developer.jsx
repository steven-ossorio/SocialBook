import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const AboutDeveloper = () => {
  return(
    <div>
      <div className="about-developer-container">
        <a href="//linkedin.com/in/steven-ossorio/"><i className="fa fa-linkedin"></i></a>
        <a href='//github.com/steven-ossorio/SocialBook'><i className="fa fa-github"></i></a>
        <a href='//www.stevenossorio.com'><i className="fa fa-globe"></i></a>
      </div>
    </div>
  );
};

export default AboutDeveloper;
