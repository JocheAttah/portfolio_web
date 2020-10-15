import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "../assets/icons/github.svg";
import webLink from "../assets/icons/weblink.svg";

function Project({ id, name, image, info, tags, github, weblink }) {
  return (
    <div className="project">
      <div className="project__imageContainer">
        <img src={image} alt="bmi screenshot" className="project__image" />
      </div>
      <div className="project__content">
        <p className="project__tag">Featured project</p>
        <h3 className="project__name">{name}</h3>
        <div className="project__detailContainer">
          <p className="project__detail">{info}</p>
        </div>
        <div className="project__tag project__techs">
            {console.table(tags)}
            {Object.keys(tags).forEach(tag =>(
                <div>{tags[tag]}</div>
            ))}
            {/* {for (let tag in tags) {
                <div>{tags[tag].value}</div>
            }} */}

          {/* <div className="tech">ChartJS</div>
          <div className="tech">JavaScript</div>
          <div className="tech">SCSS</div> */}
        </div>
        <div className="project__link">
          <a href={github}>
            <img
              className="project__link--github"
              src={GitHubIcon}
              alt="Github"
            />
          </a>
            
        <a href={weblink}>
            <img className="project__link--live" src={webLink} alt="web link" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
