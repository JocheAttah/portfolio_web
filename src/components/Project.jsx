import React from "react";

function Project() {
  return (
    <div className="project">
      <div className="project__imageContainer">
        <img src="" alt="" className="project__image" />
      </div>
      <div className="project__content">
        <p className="project__tag">Featured project</p>
        <h3 className="project__name">Amazon Clone</h3>
        <div className="detailContainer">
          <p className="project__detail">
            I'm a design-minded software engineer in Abuja, NGR who specializes{" "}
            <br />
            in building (and occasionally designing) exceptional high-quality{" "}
            <br />
            websites and applications.
          </p>
        </div>
        <div className="project__tags"> ReactJS  ChartJS  SCSS</div>
        <div className="project__link">
            <div className="project__link--github">githubIcon</div>
            <div className="project__link--live">LiveIcon</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
