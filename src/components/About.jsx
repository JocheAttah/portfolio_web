import React from "react";
import myImage from "../assets/images/Attah.jpg";
// import imgsvg from "";

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
              <li className="about__tech">Javascript 1</li>
              <li className="about__tech">Javascript 2</li>
              <li className="about__tech">Javascript 3</li>
              <li className="about__tech">Javascript 4</li>
              <li className="about__tech">Javascript 5</li>
              <li className="about__tech">Javascript 6</li>
            </div>
          </div>
          <div className="about__right">
            <div className="about__svgContainer">
              <img className="about__svg" src="" alt="" />
            </div>
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
