import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "../assets/icons/github.svg";
import webLink from "../assets/icons/weblink.svg";

function Project() {
  return (
    <div className="project">
      <div className="project__imageContainer">
        <img
          src="https://github.com/JocheAttah/react_bmi_calculator_chart/raw/master/img/bmi.jpg"
          alt="bmi screenshot"
          className="project__image"
        />
      </div>
      <div className="project__content">
        <p className="project__tag">Featured project</p>
        <h3 className="project__name">Amazon Clone</h3>
        <div className="project__detailContainer">
          <p className="project__detail">
            I'm a design-minded software engineer in Abuja, NGR who specializes{" "}
            <br />
            in building (and occasionally designing) exceptional high-quality{" "}
            <br />
            websites and applications.
          </p>
        </div>
        <div className="project__tag project__techs">
          <div className="tech">ReactJS</div>
          <div className="tech">ChartJS</div>
          <div className="tech">JavaScript</div>
          <div className="tech">SCSS</div>
        </div>
        <div className="project__link">
          <Link>
            <img  className="project__link--github" src={GitHubIcon} alt="Github" />
          </Link>

          <Link >
            <img className="project__link--live" src={webLink} alt="web link" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
