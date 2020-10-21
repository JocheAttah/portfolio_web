import React from "react";
import myImage from "../assets/images/Attah.jpg";
// import imgsvg from '../assets/images/dots.png';

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h3 className="about__heading">About Me</h3>
        <div className="about__direction">
          <div className="about__left">
            <div className="about__paragraph">
              I'm a design-minded software engineer in Abuja, NGR who
              specializes in building (and occasionally designing) exceptional
              high-quality websites and applications. <br /> I'm a design-minded
              software engineer in Abuja, NGR who specializes in building (and
              occasionally designing) exceptional high-quality websites and
              applications.
            </div>

            <div className="about__techs">
              <li className="about__tech">Javascript</li>
              <li className="about__tech">ReactJS</li>
              <li className="about__tech">CSS</li>
              <li className="about__tech">SCSS</li>
              <li className="about__tech">NodeJS</li>
              <li className="about__tech">Firebase</li>
              <li className="about__tech">User Interface & Experience Design</li>
              
            </div>
          </div>
          <div className="about__right">
            {/* <div className="about__svgContainer"> */}
              {/* <img className="about__svg" src={imgsvg} alt="" /> */}
            {/* </div> */}
            <div className="about__imageContainer">
              <img className="about__Image" src={myImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
