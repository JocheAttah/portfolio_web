import React from "react";
import Icon from  '../assets/icons/weblink.svg'


function GithubProject({ name, link}) {


  return (
    <a href={link} className="githubProject">
      <p className="githubProject__name">{name}</p>
      <img className="githubProject__link--live" src={Icon} alt="Go to"/>
    </a>
  );
}

export default GithubProject;
