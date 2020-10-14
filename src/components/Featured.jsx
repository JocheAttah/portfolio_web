import React from "react";
import Project from "./Project";

function Featured() {
  return (
    <div className="featured" id="fProjects">
      <div className="featured___content"> 
      <h3 className="featured__heading">Featured</h3>
      <h3 className="featured__heading">Projects</h3>
      <Project />

      </div>
    </div>
  );
}

export default Featured;
